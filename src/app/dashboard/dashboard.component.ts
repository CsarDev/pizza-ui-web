import { Component, OnInit } from '@angular/core';
import { Order } from '../models/Order';
import { OrderService } from './../order.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  orders: Order[] = [];

  constructor(private orderServices: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderServices.getOrders()
      .subscribe(orders => this.orders = orders.slice(1, 5));
  }
}
