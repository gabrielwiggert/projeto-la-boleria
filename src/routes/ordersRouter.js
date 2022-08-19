import { Router } from 'express';
import {
  getOrders
} from '../controllers/ordersController.js';

const ordersRouter = Router();

ordersRouter.get('/orders', getOrders);

export default ordersRouter;