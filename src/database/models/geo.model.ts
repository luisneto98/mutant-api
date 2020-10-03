import { IGeo } from '../interfaces/geo.interface';
import { ApiProperty } from '@nestjs/swagger';

export class Geo implements IGeo {
  @ApiProperty({ type: 'string' })
  lat: string;
  @ApiProperty({ type: 'string' })
  lng: string;
}
