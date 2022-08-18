import { Router } from 'express';
import cakeSchema from "../schemas/cakeSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  createCake
} from '../controllers/cakesController.js';

const cakesRouter = Router();

cakesRouter.post('/cakes', validateSchema(cakeSchema), createCake);

export default cakesRouter;