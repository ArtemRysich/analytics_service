import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { OrderAnalyticsService } from './order-analytics.service';
import { OrderAnalyticsController } from './order-analytics.controller';

@Module({
  imports: [ConfigModule.forRoot(), HttpModule],
  controllers: [OrderAnalyticsController],
  providers: [OrderAnalyticsService],
})
export class OrderAnalyticsModule {}
