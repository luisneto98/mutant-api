import { Model } from 'objection';
import { User } from './user.model';
import { ApiProperty } from '@nestjs/swagger';
import { IContact } from '../interfaces/contact.interface';

export class Contact extends Model implements IContact {
  @ApiProperty({ nullable: true, type: 'number' })
  id?: number;
  @ApiProperty({ type: 'string' })
  email: string;
  @ApiProperty({ type: 'string' })
  website: string;
  @ApiProperty({ type: 'string' })
  phone: string;

  users: User[]

  public static get tableName(): string {
    return 'Contact';
  }

  public static get relationMappings(): any {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: `${Contact.tableName}.id`,
          to: `${User.tableName}.contactId`
        }
      },
    };
  }
}
