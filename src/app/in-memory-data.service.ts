import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Order } from './models/Order';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const orders = [
      { id: 11, description: 'Mr. Nice', quantity: 2, itemCode: 'Pizza1' },
      { id: 12, description: 'Narco', quantity: 2, itemCode: 'Pizza1' },
      { id: 13, description: 'Bombasto', quantity: 2, itemCode: 'Pizza1' },
      { id: 14, description: 'Celeritas', quantity: 2, itemCode: 'Pizza1' },
      { id: 15, description: 'Magneta', quantity: 2, itemCode: 'Pizza1' },
      { id: 16, description: 'RubberMan', quantity: 2, itemCode: 'Pizza1' },
      { id: 17, description: 'Dynama', quantity: 2, itemCode: 'Pizza1' },
      { id: 18, description: 'Dr IQ', quantity: 2, itemCode: 'Pizza1' },
      { id: 19, description: 'Magma', quantity: 2, itemCode: 'Pizza1' },
      { id: 20, description: 'Tornado', quantity: 2, itemCode: 'Pizza1' }
    ];
    return {orders};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(orders: Order[]): number {
    return orders.length > 0 ? Math.max(...orders.map(order => order.id)) + 1 : 11;
  }
}
