import { Router } from 'express';
import clientSchema from "../schemas/clientSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  createClient,
  getOrdersByClientId
} from '../controllers/clientsController.js';

const clientsRouter = Router();

clientsRouter.post('/clients', validateSchema(clientSchema), createClient);
clientsRouter.get('/clients/:id/orders', getOrdersByClientId);

export default clientsRouter;