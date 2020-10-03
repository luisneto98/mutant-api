import { IUserJson } from './../../dist/common/interfaces/user-json.interface.d';
import { IUser } from './../database/interfaces/user.interface';
import { Company } from './../database/models/company.model';
import { Address } from './../database/models/address.model';
import { IAddress } from './../../dist/common/interfaces/address.interface.d';
import { ICompany } from './../../dist/common/interfaces/company.interface.d';
import { Contact } from './../database/models/contact.model';
import { User } from './../database/models/user.model';
import { Injectable } from '@nestjs/common';
import { IContact } from 'src/database/interfaces/contact.interface';

@Injectable()
export class UserRepository {
  public async insertUserJson(userJson: IUserJson) {
    const {
      id,
      name,
      username,
      email,
      phone,
      website,
      address,
      company,
    } = userJson;

    const user = await this.findUserById(userJson.id);

    if (user) {
      return this.updateUser({ id, name, username });
    }

    const {
      geo: { lat, lng },
      street,
      suite,
      city,
      zipcode,
    } = address;
    const { id: addressId } = await this.insertAddress({
      street,
      suite,
      city,
      zipcode,
      lat,
      lng,
    });
    const { id: companyId } = await this.insertCompany(company);
    const { id: contactId } = await this.insertContact({
      email,
      phone,
      website,
    });

    return this.insertUser({
      id,
      name,
      username,
      addressId,
      companyId,
      contactId,
    });
  }

  public async insertUser(model: IUser) {
    return User.query().insert(model);
  }

  public async updateUser(model: IUser) {
    return User.query().update(model);
  }

  public async insertContact(model: IContact) {
    return Contact.query().insert(model);
  }

  public async insertAddress(model: IAddress) {
    return Address.query().insert(model);
  }

  public async insertCompany(model: ICompany) {
    return Company.query().insert(model);
  }

  public async findUserById(id: number) {
    return User.query().findById(id);
  }
}
