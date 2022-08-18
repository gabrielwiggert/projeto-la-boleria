import { Router } from 'express';
import orderSchema from "../schemas/orderSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  createOrder
} from '../controllers/orderController.js';

const orderRouter = Router();

orderRouter.post('/order', validateSchema(orderSchema), createOrder);

export default orderRouter;