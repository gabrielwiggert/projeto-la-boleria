import { Router } from 'express';
import {
  getOrders,
  getOrdersById
} from '../controllers/ordersController.js';

const ordersRouter = Router();

ordersRouter.get('/orders', getOrders);
ordersRouter.get('/orders/:id', getOrdersById);

export default ordersRouter;