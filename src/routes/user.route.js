import express from 'express';
import * as userController from '../controllers/user.controller';


const router = express.Router();

router.post('/register',userController.regUser);

router.post('/login',userController.logUser);

export default router;
