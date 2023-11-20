import express from "express";
import {
  forgotPasswordController,
  getAllOrdersController,
  getOrdersController,
  loginController,
  orderStatusController,
  registerConstroler,
  testController,
  updateProfileController,
} from "../controllers/authController.js";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
// router object
const router = express.Router();

// routing
// Register || METHOD POST
router.post("/register", registerConstroler);

// Login || POST
router.post("/login", loginController);

// Forgot Password || post
router.post("/forgot-password", forgotPasswordController);

//  text route
router.get("/test", requiredSignIn, isAdmin, testController);

//protected user route auth
router.get("/user-auth", requiredSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected admin route auth
router.get("/admin-auth", requiredSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

// update profile
router.put("/profile", requiredSignIn, updateProfileController);

// orders
router.get("/orders", requiredSignIn, getOrdersController);

// all orders
router.get("/all-orders", requiredSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requiredSignIn,
  isAdmin,
  orderStatusController
);

export default router;
