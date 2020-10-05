import { IUserJson } from './../database/interfaces/user-json.interface';
import { Test, TestingModule } from '@nestjs/testing';
import { BusinessService } from './business.service';

describe('BusinessService', () => {
  let service: BusinessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BusinessService],
    }).compile();

    service = module.get<BusinessService>(BusinessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should correctly label the suite user', () => {
    const user = {
      id: 3,
      address: {
        suite: 'suite',
      },
    } as IUserJson;
    expect(service.hostedInSuite(user)).toBe(true);
  });

  it('should label the user in the apartment correctly', () => {
    const user = {
      id: 3,
      address: {
        suite: 'ap. test',
      },
    } as IUserJson;
    expect(service.hostedInSuite(user)).toBe(false);
  });

  it('should correctly identify the apartment with the name next to the suite', () => {
    const user = {
      id: 3,
      address: {
        suite: 'ap. suiti',
      },
    } as IUserJson;
    expect(service.hostedInSuite(user)).toBe(false);
  });
});
