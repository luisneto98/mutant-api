import { Company } from './company.model';
import { Contact } from './contact.model';
import { Address } from './address.model';
import { IUser } from './../interfaces/user.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

export class User extends Model implements IUser {
  @ApiProperty({ nullable: true, type: 'number' })
  id?: number;
  @ApiProperty({ type: 'string' })
  name: string;
  @ApiProperty({ type: 'string' })
  username: string;

  public static get tableName(): string {
    return 'User';
  }

  public static get relationMappings(): any {
    return {
      address: {
        relation: Model.HasOneRelation,
        modelClass: Address,
        join: {
          from: `${Address.tableName}.id`,
          to: `${User.tableName}.addressId`
        }
      },
      contact: {
        relation: Model.HasOneRelation,
        modelClass: Contact,
        join: {
          from: `${Contact.tableName}.id`,
          to: `${User.tableName}.contactId`
        }
      },
      company: {
        relation: Model.HasOneRelation,
        modelClass: Company,
        join: {
          from: `${Company.tableName}.id`,
          to: `${User.tableName}.companyId`
        }
      },
    };
  }

}
