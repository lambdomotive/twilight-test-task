import { Module } from '@nestjs/common';
import { InfectionsModule } from './infections/infections.module';

@Module({
  imports: [InfectionsModule],
})
export class AppModule {}
