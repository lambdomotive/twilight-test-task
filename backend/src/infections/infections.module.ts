import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { InfectionsService } from './infections.service';
import { InfectionsController } from './infections.controller';

@Module({
  imports: [
    HttpModule.register({
      timeout: 7000,
    }),
  ],
  controllers: [InfectionsController],
  providers: [InfectionsService],
})
export class InfectionsModule {}
