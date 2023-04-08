const express = require("express");
const {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
} = require("../controller/productCtrl");
const router = express.Router();

router.post("/", createProduct);

router.get("/:id", getProduct);

router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

router.get("/", getAllProducts);

module.exports = router;
