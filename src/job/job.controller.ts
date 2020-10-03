import { JobService } from './job.service';
import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('job')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('process-user')
  @ApiResponse({ status: 200 })
  runProcessUser() {
    return this.jobService.processUser();
  }
}
