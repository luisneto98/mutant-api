import { elasticsearchUrl } from './../config';
import { LoggerService } from './logger.service';
import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch'

@Module({
  providers: [LoggerService],
  imports: [
    ElasticsearchModule.register({
      node: elasticsearchUrl,
      maxRetries: 10,
    })
  ],
  exports: [LoggerService],
})
export class LoggerModule {}
