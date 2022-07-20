import { Module } from '@nestjs/common';
import { VehicleEntriesService } from './vehicle-entries.service';
import { VehicleEntriesController } from './vehicle-entries.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  controllers: [VehicleEntriesController],
  providers: [VehicleEntriesService, PrismaService],
})
export class VehicleEntriesModule {}
