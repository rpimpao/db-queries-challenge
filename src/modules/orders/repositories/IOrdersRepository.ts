import { Order } from "../entities/Order";

export interface IOrdersRepository{
  findAllOrders(): Promise<Order[]>
}