import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleEntriesModule } from './vehicle-entries/vehicle-entries.module';

@Module({
  imports: [VehicleEntriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
