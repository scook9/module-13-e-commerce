const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const tagRoutes = require("./tag-routes");

//need to update these routes in each of their respective .js files
//http://localhost:3001/api/
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/tags", tagRoutes);

module.exports = router;
