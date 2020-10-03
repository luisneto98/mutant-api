import { ICompany } from './company.interface';
import { IAddress } from './address.interface';

export interface IUserJson {
  id: number;
  name: string;
  username: string;
  email: string;
  address?: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
