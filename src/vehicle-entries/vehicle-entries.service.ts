import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma.service';
import { CreateVehicleEntryDto } from './dto/create-vehicle-entry.dto';
import { UpdateVehicleEntryDto } from './dto/update-vehicle-entry.dto';

@Injectable()
export class VehicleEntriesService {
  constructor(private prisma: PrismaService) {}

  create(createVehicleEntryDto: Prisma.VehiclesCreateInput) {
    return this.prisma.vehicles.create({
      data: createVehicleEntryDto, 
    })
  }

  findAll() {
    return this.prisma.vehicles.findMany();
  }

  findOne(id: number) {
    return this.prisma.vehicles.findUnique({
      where: { id },
    });
  }
  // findOne(vehicleWhereUniqueInput: Prisma.VehiclesWhereUniqueInput) {
  //   return this.prisma.vehicles.findUnique({
  //     where: vehicleWhereUniqueInput,
  //   });
  // }

  update(id: number, updateVehicleEntryDto: UpdateVehicleEntryDto) {
    return `This action updates a #${id} vehicleEntry`;
  }

  remove(id: number) {
    return `This action removes a #${id} vehicleEntry`;
  }
}
