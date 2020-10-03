import { HttpModule, Module } from '@nestjs/common';
import { DownloadController } from './download.controller';
import { DownloadService } from './download.service';

@Module({
  controllers: [DownloadController],
  imports: [HttpModule],
  providers: [DownloadService],
  exports: [DownloadService],
})
export class DownloadModule {}
