const express = require("express");
const router = express.Router();
const routerProduct = require("../products/productRouter");

router.use("/product", routerProduct);

module.exports = router;
