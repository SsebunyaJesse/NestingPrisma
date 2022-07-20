import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleEntriesService } from './vehicle-entries.service';
import { CreateVehicleEntryDto } from './dto/create-vehicle-entry.dto';
import { UpdateVehicleEntryDto } from './dto/update-vehicle-entry.dto';

@Controller('vehicles')
export class VehicleEntriesController {
  constructor(private readonly vehicleEntriesService: VehicleEntriesService) {}

  @Post()
  create(@Body() createVehicleEntryDto: CreateVehicleEntryDto) {
    return this.vehicleEntriesService.create(createVehicleEntryDto);
  }

  @Get()
  findAll() {
    return this.vehicleEntriesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehicleEntriesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleEntryDto: UpdateVehicleEntryDto) {
    return this.vehicleEntriesService.update(+id, updateVehicleEntryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehicleEntriesService.remove(+id);
  }
}
