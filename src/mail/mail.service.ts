import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MailService {
  private readonly apiKey: string | undefined;
  private readonly senderEmail: string | undefined;
  private readonly senderName: string;
  private readonly apiUrl = 'https://api.zeptomail.com/v1.1/email';

  constructor(private configService: ConfigService) {
    this.apiKey = this.configService.get<string>('ZEPTOMAIL_API_KEY');
    this.senderEmail = this.configService.get<string>('ZEPTOMAIL_SENDER_EMAIL');
    this.senderName = this.configService.get<string>('ZEPTOMAIL_SENDER_NAME') || 'Upkora Academy';
  }

  async sendMail(to: string, subject: string, html: string) {
    const { apiKey, senderEmail, senderName } = this;

    if (!apiKey || !senderEmail) {
      console.warn('ZEPTOMAIL_API_KEY or ZEPTOMAIL_SENDER_EMAIL not found. Skipping email send.');
      return;
    }

    // Helper — safely parse a fetch Response body, falling back to raw text
    const parseBody = async (res: Response) => {
      const text = await res.text();
      try {
        return JSON.parse(text);
      } catch {
        return text;
      }
    };

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // NOTE: ZEPTOMAIL_API_KEY must already include the full
          // "Zoho-enczapikey <token>" value — do NOT prefix it again here.
          Authorization: apiKey,
        },
        body: JSON.stringify({
          from: {
            address: senderEmail,
            name: senderName,
          },
          to: [
            {
              email_address: {
                address: to,
              },
            },
          ],
          subject: subject,
          htmlbody: html,
        }),
      });

      const body = await parseBody(response);

      if (!response.ok) {
        console.error('Zeptomail error:', body);
        throw new InternalServerErrorException('Failed to send email');
      }

      return body;
    } catch (error) {
      console.error('Mail service error:', error);
      throw new InternalServerErrorException('Failed to send email');
    }
  }

  async sendVerificationEmail(email: string, token: string) {
    const url = `${this.configService.get('FRONTEND_URL')}/verify-email?token=${token}`;
    const html = `
      <h1>Welcome to Upkora Academy</h1>
      <p>Please click the link below to verify your email address:</p>
      <a href="${url}">Verify Email</a>
      <p>If you did not create an account, please ignore this email.</p>
    `;
    return this.sendMail(email, 'Verify your email address', html);
  }

  async sendPasswordResetEmail(email: string, token: string) {
    const url = `${this.configService.get('FRONTEND_URL')}/reset-password?token=${token}`;
    const html = `
      <h1>Password Reset Request</h1>
      <p>You requested a password reset. Please click the link below to set a new password:</p>
      <a href="${url}">Reset Password</a>
      <p>If you did not request this, please ignore this email. The link will expire in 1 hour.</p>
    `;
    return this.sendMail(email, 'Reset your password', html);
  }
}
