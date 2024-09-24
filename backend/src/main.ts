import { NestFactory } from '@nestjs/core';

import { HttpExceptionFilter } from './infections/http-exception.filter';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000'],
    methods: 'GET, POST, PUT, PATCH, DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  await app.listen(4200);
}
bootstrap();
