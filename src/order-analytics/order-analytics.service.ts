import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { IOrder } from './interfaces/order.interface';

@Injectable()
export class OrderAnalyticsService {
  constructor(
    private readonly configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  sendOrderAnalytics(data: IOrder) {
    try {
      const url = this.configService.get('ANALYTICS_SERVICE_URL');

      this.httpService.post(url, data);
    } catch (err) {
      console.error('Analytics for order_placed ', err);
    }
  }
}
