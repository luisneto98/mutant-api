import { User } from './user.model';
import { ICompany } from '../interfaces/company.interface';
import { ApiProperty } from '@nestjs/swagger';
import { Model } from 'objection';

export class Company extends Model implements ICompany {
  @ApiProperty({ nullable: true, type: 'number' })
  id?: number;
  @ApiProperty({ type: 'string' })
  name: string;
  @ApiProperty({ type: 'string' })
  catchPhrase: string;
  @ApiProperty({ type: 'string' })
  bs: string;

  users?: User[]

  public static get tableName(): string {
    return 'Company';
  }

  public static get relationMappings(): any {
    return {
      users: {
        relation: Model.HasManyRelation,
        modelClass: User,
        join: {
          from: `${Company.tableName}.id`,
          to: `${User.tableName}.companyId`
        }
      },
    };
  }

}
