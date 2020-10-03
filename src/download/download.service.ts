import { userDataUrl } from './../config';
import { IUserJson } from '../database/interfaces/user-json.interface';
import { HttpService, Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class DownloadService {
  constructor(private readonly httpService: HttpService) {}

  public async loadUserJson(): Promise<IUserJson[]> {
    try {
      const { data } = await this.httpService
        .get<IUserJson[]>(userDataUrl)
        .toPromise();
      return data;
    } catch (err) {
      if(err?.response?.status === 404)
        throw new NotFoundException('resource-not-found')
      throw err;
    }
  }
}
