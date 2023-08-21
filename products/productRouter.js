const express = require("express");
const router = express.Router();
const controller = require("./productController");

router.get("/", controller.getAll);
router.get("/:id", controller.getByID);
router.put("/:id", controller.putProduct);
router.delete("/:id", controller.deleteProduct);
router.put("/:id/:operator", controller.chengeSum); //
router.post("/", controller.addProduct);

module.exports = router;
