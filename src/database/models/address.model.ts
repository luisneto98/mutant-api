import { User } from './user.model';
import { Geo } from './geo.model';
import { IAddress } from '../interfaces/address.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

export class Address extends Model implements IAddress {
  @ApiProperty({ nullable: true, type: 'number' })
  id?: number;
  @ApiProperty({ type: 'string' })
  street: string;
  @ApiProperty({ type: 'string' })
  suite: string;
  @ApiProperty({ type: 'string' })
  city: string;
  @ApiProperty({ type: 'string' })
  zipcode: string;
  @ApiProperty({ type: Geo })
  geo?: Geo
  lat: string;
  lng: string;


  users?: User[];

  public static get tableName(): string {
    return 'Address';
  }

  public static get relationMappings(): any {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: `${Address.tableName}.id`,
          to: `${User.tableName}.addressId`
        }
      },
    };
  }

}
