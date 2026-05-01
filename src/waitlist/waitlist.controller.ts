import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { WaitlistService } from './waitlist.service';
import { JoinWaitlistDto } from './dto/join-waitlist.dto';

@Controller('waitlist')
export class WaitlistController {
  constructor(private readonly waitlistService: WaitlistService) {}

  @Post('join')
  async joinWaitlist(@Body() joinWaitlistDto: JoinWaitlistDto) {
    await this.waitlistService.joinWaitlist(joinWaitlistDto);
    return {
      message: 'Successfully joined the waitlist',
    };
  }
  
  @Get()
  async getAllWaitlistEntries(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    return this.waitlistService.getAllWaitlistEntries(Number(page), Number(limit));
  }
}
