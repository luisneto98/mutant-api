import { IUserJson } from './../database/interfaces/user-json.interface';
import { JobModule } from './job.module';
import { UserRepository } from './../user/user.repository';
import { DownloadService } from './../download/download.service';
import { Test, TestingModule } from '@nestjs/testing';
import { JobController } from './job.controller';

describe('JobController', () => {
  let controller: JobController;
  let insertUserJson: jest.Mock;
  let loadUserJson: jest.Mock;

  beforeEach(async () => {
    insertUserJson = jest.fn();
    loadUserJson = jest.fn();

    const module: TestingModule = await Test.createTestingModule({
      imports: [JobModule],
    })
      .overrideProvider(UserRepository)
      .useValue({
        insertUserJson,
      })
      .overrideProvider(DownloadService)
      .useValue({
        loadUserJson,
      })
      .compile();

    controller = module.get<JobController>(JobController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should run correctly', async () => {
    const usersMock = [
      {
        id: 1,
        address: {
          suite: 'suite',
        },
      },
      {
        id: 2,
        address: {
          suite: 'suite',
        },
      },
      {
        id: 3,
        address: {
          suite: 'suite',
        },
      },
    ] as IUserJson[];

    loadUserJson.mockReturnValue(usersMock);

    await controller.runProcessUser();
    expect(loadUserJson).toHaveBeenCalledTimes(1);
    expect(insertUserJson).toHaveBeenCalledTimes(3);
  });

  it('should correctly filter users in suites', async () => {
    const usersMock = [
      {
        id: 1,
        address: {
          suite: 'ap. suite',
        },
      },
      {
        id: 2,
        address: {
          suite: 'ap. false-suit',
        },
      },
      {
        id: 3,
        address: {
          suite: 'suitee',
        },
      },
    ] as IUserJson[];

    loadUserJson.mockReturnValue(usersMock);

    await controller.runProcessUser();
    expect(loadUserJson).toHaveBeenCalledTimes(1);
    expect(insertUserJson).toHaveBeenCalledTimes(2);
    expect(insertUserJson).toHaveBeenCalledWith(usersMock[0]);
    expect(insertUserJson).toHaveBeenCalledWith(usersMock[2]);
    expect(insertUserJson).not.toHaveBeenCalledWith(usersMock[1]);
  });
});
