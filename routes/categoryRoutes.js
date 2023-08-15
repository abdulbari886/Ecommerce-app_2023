import express from "express";
import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categorycontroller.js";

const router = express.Router();

//routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAll Categories
router.get("/get-category", categoryControlller);

//single Categories
router.get('/single-category/:slug',singleCategoryController)

//delete category
router.delete("/delete-category/:id", requireSignIn,isAdmin,deleteCategoryController)

export default router;
