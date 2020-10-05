import { userDataUrl } from './../config';
import { IUserJson } from '../database/interfaces/user-json.interface';
import { HttpService, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DownloadService {
  constructor(private readonly httpService: HttpService) {}

  public async loadUserJson(): Promise<IUserJson[]> {
    const { data } = await this.httpService
      .get<IUserJson[]>(userDataUrl)
      .toPromise();
    return data;
  }
}
