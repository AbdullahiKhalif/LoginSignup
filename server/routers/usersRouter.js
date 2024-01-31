import express from 'express';
import { registerUser, loginUser, forgetPassword } from '../controllers/usersController.js';
import { regsiterUserValidation, validationForgetPassword, validationLogin } from '../validations/Uservalidation.js';

const userRouter = express.Router();


userRouter.post("/", regsiterUserValidation, registerUser)
userRouter.post("/login",validationLogin, loginUser)
userRouter.post("/forgetPassword",validationForgetPassword, forgetPassword)

export default userRouter;