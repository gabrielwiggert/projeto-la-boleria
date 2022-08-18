import { Router } from 'express';
import userSchema from "../schemas/userSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  signup
} from '../controllers/signupController.js';

const signupRouter = Router();

signupRouter.post('/signup', validateSchema(userSchema), signup);

export default signupRouter;