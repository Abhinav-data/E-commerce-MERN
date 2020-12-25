const express = require("express");
const router = express.Router();

const {
  getProductById,
  createProduct,
  getProduct,
  photo,
  updateProduct,
  deleteProduct,
  getAllProducts,
  getAllUniqueCategories,
} = require("../controllers/product");
const { isSignedIn, isAdmin, isAuthenticated } = require("../controllers/auth");
const { getUserById } = require("../controllers/user");

router.param("userId", getUserById);
router.param("productId", getProductById);

router.post(
  "/product/create/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  createProduct
);

router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);

router.get("/product/categories", getAllUniqueCategories);

router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  deleteProduct
);

router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAdmin,
  isAuthenticated,
  updateProduct
);

router.get("/products", getAllProducts);

module.exports = router;
