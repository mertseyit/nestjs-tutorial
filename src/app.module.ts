import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PlayersModule } from './players/players.module';

@Module({
  imports: [ProductModule, PlayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
