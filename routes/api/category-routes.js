const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint
//http://localhost:3001/api/categories
router.get("/", async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category_data = await Category.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(category_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

//http://localhost:3001/api/categories/:id
router.get("/:id", async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const category_data = await Category.findByPk(req.params.id);
    res.status(200).json(category_data);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new category
  try {
    const new_category = await Category.create({
      category_name: req.body.category_name,
    });
    res.status(200).json(new_category);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
