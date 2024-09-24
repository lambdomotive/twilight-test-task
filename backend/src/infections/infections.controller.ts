import { Controller, Post, Body } from '@nestjs/common';
import { InfectionsService } from './infections.service';
// import { InfectionDto } from './dto/infection.dto';
import { PayloadDTO } from './dto/payload.dto';

@Controller('infections')
export class InfectionsController {
  constructor(private readonly infectionsService: InfectionsService) {}

  @Post()
  getInfections(@Body() payload: PayloadDTO) {
    return this.infectionsService.getInfections(payload);
  }
}
