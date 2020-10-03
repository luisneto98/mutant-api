import { BusinessModule } from './../business/business.module';
import { DownloadModule } from './../download/download.module';
import { UserModule } from './../user/user.module';
import { HttpModule, Module } from '@nestjs/common';
import { JobController } from './job.controller';
import { JobService } from './job.service';

@Module({
  imports: [UserModule, DownloadModule, HttpModule, BusinessModule],
  controllers: [JobController],
  providers: [JobService]
})
export class JobModule {}
