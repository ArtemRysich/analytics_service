import { Module } from '@nestjs/common';
import { OrderAnalyticsModule } from './order-analytics/order-analytics.module';

@Module({
  imports: [OrderAnalyticsModule],
})
export class AppModule {}
