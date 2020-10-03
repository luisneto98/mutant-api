import { Address } from './address.model';
import { Company } from './company.model';
import { ApiProperty } from '@nestjs/swagger';
import { IUserJson } from '../interfaces/user-json.interface';
export class UserJson implements IUserJson {
  @ApiProperty({ type: 'number' })
  id: number;
  @ApiProperty({ type: 'string' })
  name: string;
  @ApiProperty({ type: 'string' })
  username: string;
  @ApiProperty({ type: 'string' })
  email: string;
  @ApiProperty({ type: Address })
  address: Address
  @ApiProperty({ type: 'string' })
  phone: string;
  @ApiProperty({ type: 'string' })
  website: string;

  @ApiProperty({ type: Company })
  company: Company;
}
