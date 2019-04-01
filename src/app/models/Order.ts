import { Item } from './Item';
export interface Order {
  orderId?: number;
  items: Item[];
}
