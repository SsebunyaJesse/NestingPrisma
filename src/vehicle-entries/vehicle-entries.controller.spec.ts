import { Test, TestingModule } from '@nestjs/testing';
import { VehicleEntriesController } from './vehicle-entries.controller';
import { VehicleEntriesService } from './vehicle-entries.service';

describe('VehicleEntriesController', () => {
  let controller: VehicleEntriesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VehicleEntriesController],
      providers: [VehicleEntriesService],
    }).compile();

    controller = module.get<VehicleEntriesController>(VehicleEntriesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
