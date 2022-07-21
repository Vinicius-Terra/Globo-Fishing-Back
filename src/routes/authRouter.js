import { Router } from 'express';
import { signUp, signIn, getAllFishes, test } from '../controllers/authController.js';
import sinUpSchemaValidationMiddleware from '../middlewares/signUpSchemaValidationMiddleware.js';
import signInSchemaValidationMiddleware from '../middlewares/signInSchemaValidationMiddleware.js';


const authRouter = Router();
authRouter.post("/sign-up", sinUpSchemaValidationMiddleware, signUp);
authRouter.post("/sign-in", signInSchemaValidationMiddleware, signIn);
authRouter.get("/fishes",  getAllFishes);
authRouter.get("/",  test);
export default authRouter;