import { Controller, Get } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller()
export class AppController {
  @Get()
  @ApiResponse({ status: 200, description: "will respond 'alive' if the service is running" })
  healthCheck(): string {
    return 'alive';
  }
}
