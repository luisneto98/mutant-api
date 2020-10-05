import { Injectable, Logger } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch'

@Injectable()
export class LoggerService extends Logger {
  constructor(private readonly elasticsearchService: ElasticsearchService) {
    super();
  }

  error(message: string, trace: string) {
    const log = {
      message,
      trace
    }
    this.elasticsearchService.index({
      index: 'error',
      type: 'log',
      body: log
    })
    super.error(message, trace);
  }
  
  warn(message: string) {
    const log = {
      message
    }
    this.elasticsearchService.index({
      index: 'warn',
      type: 'log',
      body: log
    })
    super.warn(message);
  }

  log(message: string) {
    const log = {
      message
    }
    this.elasticsearchService.index({
      index: 'info',
      type: 'log',
      body: log
    })
    super.log(message);
  }
}
