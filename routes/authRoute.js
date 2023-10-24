import express from "express";
import { loginController, registerConstroler, testController } from '../controllers/authController.js'
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router()

// routing
// Register || METHOD POST
router.post('/register', registerConstroler)


// Login || POST
router.post('/login', loginController);

//  text route
router.get('/test', requiredSignIn, isAdmin, testController);


export default router;