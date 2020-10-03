import { IUserJson } from './../database/interfaces/user-json.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BusinessService {
  public hostedInSuite(user: IUserJson): boolean {
    return Boolean(user?.address?.suite?.toLowerCase()?.includes('suite'));
  }
}
