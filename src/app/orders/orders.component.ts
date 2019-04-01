import { Component, OnInit } from '@angular/core';
import { Order } from './../models/Order';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  onSelect(order: Order): void {
    this.selectedOrder = order;
  }

  getOrders(): void {
    this.orderService.getOrders()
        .subscribe(orders => this.orders = orders);
  }

  add(description: string, itemCode: string, quantityArg: string): void {
    description = description.trim();
    itemCode = itemCode.trim();
    const quantity = parseInt(quantityArg.trim());

    if (!description || !itemCode || !quantity) { return; }

    this.orderService.addOrder({ description, itemCode, quantity } as Order)
      .subscribe(order => {
        this.orders.push(order);
      });
  }

  delete(order: Order): void {
    this.orders = this.orders.filter(h => h !== order);
    this.orderService.deleteOrder(order).subscribe();
  }

}
