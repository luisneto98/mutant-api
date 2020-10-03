import { IGeo } from './geo.interface';

export interface IAddress {
  id?: number;
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo?: IGeo;
  lat?: string;
  lng?: string;
}
