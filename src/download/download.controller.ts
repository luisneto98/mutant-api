import { UserJson } from '../database/models/user-json.model';
import { IUserJson } from '../database/interfaces/user-json.interface';
import { Controller, Get } from '@nestjs/common';
import { DownloadService } from './download.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Download')
@Controller('download')
export class DownloadController {
  constructor(private readonly downloadService: DownloadService) {}

  @Get('users')
  @ApiResponse({ status: 200, type: UserJson })
  getUsers(): Promise<IUserJson[]> {
    return this.downloadService.loadUserJson();
  }
}
