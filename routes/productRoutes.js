import express from "express";
import Formidable from "express-formidable";
import { isAdmin, requiredSignIn } from "../middlewares/authMiddleware.js";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProduct,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";

const router = express.Router();

// routers
router.post(
  "/create-product",
  requiredSignIn,
  isAdmin,
  Formidable(),
  createProductController
);

// update product
router.put(
  "/update-product/:pid",
  requiredSignIn,
  isAdmin,
  Formidable(),
  updateProductController
);

// get product
router.get("/get-product", getProductController);

// Single product
router.get("/get-product/:slug", getSingleProduct);

// get photo
router.get("/product-photo/:pid", productPhotoController);

// delete product
router.delete("/product/:pid", deleteProductController);

export default router;
