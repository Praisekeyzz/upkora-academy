import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('test')
  async testMail(@Query('to') to: string) {
    if (!to) {
      throw new BadRequestException('Query param "to" is required. e.g. /mail/test?to=you@example.com');
    }

    const html = `
      <div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px;background:#0d2d4a;color:#fff;border-radius:12px;">
        <h1 style="color:#10b981;margin-bottom:8px;">✅ Zeptomail is working!</h1>
        <p style="color:#94a3b8;line-height:1.6;">
          This is a test email from <strong style="color:#fff;">ILR Ready</strong>.<br/>
          Your Zeptomail API key, sender domain, and mail service are all wired up correctly.
        </p>
        <hr style="border-color:#1e3a5f;margin:24px 0;"/>
        <p style="font-size:12px;color:#64748b;">Sent at: ${new Date().toISOString()}</p>
      </div>
    `;

    await this.mailService.sendMail(to, '✅ ILR Ready — Zeptomail Test Email', html);

    return {
      success: true,
      message: `Test email dispatched to ${to}. Check your inbox.`,
      sentAt: new Date().toISOString(),
    };
  }
}
