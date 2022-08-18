import { Router } from 'express';
import clientSchema from "../schemas/clientSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  createClient
} from '../controllers/clientsController.js';

const clientsRouter = Router();

clientsRouter.post('/clients', validateSchema(clientSchema), createClient);

export default clientsRouter;