import { Controller, Get } from '@nestjs/common';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('Health Check')
@Controller()
export class AppController {
  @Get()
  @ApiProperty({ description: 'route to check the server' })
  healthCheck(): string {
    return 'alive';
  }
}
