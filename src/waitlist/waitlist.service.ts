import { Injectable, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JoinWaitlistDto } from './dto/join-waitlist.dto';

@Injectable()
export class WaitlistService {
  constructor(private prisma: PrismaService) {}

  async joinWaitlist(dto: JoinWaitlistDto) {
    const existing = await this.prisma.waitlistEntry.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('This email is already on the waitlist');
    }

    const entry = await this.prisma.waitlistEntry.create({
      data: { 
        email: dto.email,
        firstName: dto.firstName,
        lastName: dto.lastName,
      },
    });

    return entry;
  }

  async getAllWaitlistEntries(page: number = 1, limit: number = 10) {
    const skip = (page - 1) * limit;

    const [items, total] = await Promise.all([
      this.prisma.waitlistEntry.findMany({
        skip,
        take: limit,
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.waitlistEntry.count(),
    ]);

    return {
      items,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
