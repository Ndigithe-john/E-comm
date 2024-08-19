import ProductModel from "#models/product.models.js";

/**
 * @desc Fetch all products
 * @route Get /api/v1/products
 * @access public
 * @param {*} res
 */

const getProducts = async (req, res) => {
  const products = await ProductModel.find({});
  res.json(products);
};

/**
 *
 * @desc Fetch Sinle product
 * route Get /api/v1/product/id
 * @access public
 */

const getProductById = async (req, res) => {
  const product = await ProductModel.findById(req, params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
};

export { getProducts, getProductById };
