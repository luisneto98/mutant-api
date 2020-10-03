import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { DownloadModule } from './download/download.module';
import { UserModule } from './user/user.module';
import { JobModule } from './job/job.module';
import { BusinessModule } from './business/business.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DownloadModule, UserModule, JobModule, BusinessModule, DatabaseModule],
  controllers: [AppController],
})
export class AppModule {}
