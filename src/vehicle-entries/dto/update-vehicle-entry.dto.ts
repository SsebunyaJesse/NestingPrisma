import { PartialType } from '@nestjs/mapped-types';
import { CreateVehicleEntryDto } from './create-vehicle-entry.dto';

export class UpdateVehicleEntryDto extends PartialType(CreateVehicleEntryDto) {}
