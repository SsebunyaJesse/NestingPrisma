import { Test, TestingModule } from '@nestjs/testing';
import { VehicleEntriesService } from './vehicle-entries.service';

describe('VehicleEntriesService', () => {
  let service: VehicleEntriesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VehicleEntriesService],
    }).compile();

    service = module.get<VehicleEntriesService>(VehicleEntriesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
