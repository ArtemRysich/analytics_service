import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { IOrder } from './interfaces/order.interface';
import { OrderAnalyticsService } from './order-analytics.service';
import { CONSTANTS } from 'src/common/variables/analytics.variables';

@Controller()
export class OrderAnalyticsController {
  constructor(private readonly orderAnalyticsService: OrderAnalyticsService) {}

  @EventPattern(CONSTANTS.ORDER_PATTERN)
  handlerOrderPlaced(@Payload() data: IOrder) {
    this.orderAnalyticsService.sendOrderAnalytics(data);
  }
}
