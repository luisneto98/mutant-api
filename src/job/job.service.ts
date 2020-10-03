import { BusinessService } from './../business/business.service';
import { DownloadService } from './../download/download.service';
import { UserRepository } from './../user/user.repository';
import { Injectable } from '@nestjs/common';
import * as Promise from 'bluebird';

@Injectable()
export class JobService {
  constructor(private readonly userRepository: UserRepository,
    private readonly downloadService: DownloadService,
    private readonly businessService: BusinessService,
    ) {}

  public async processUser() {
    const users = await this.downloadService.loadUserJson();
    const usersInSuite = users.filter(this.businessService.hostedInSuite);
    await Promise.map(usersInSuite, user => {
      this.userRepository.insertUserJson(user);
    });
  }
}
