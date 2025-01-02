import { Module, ValidationPipe } from '@nestjs/common';
import { ProductController } from './product.controller';
import { APP_PIPE } from '@nestjs/core';

@Module({
  controllers: [ProductController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class ProductModule {}
