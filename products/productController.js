const service = require("./productService");

const getAll = async (req, res) => {
  try {
    const products = await service.response();
    res.send(products);
  } catch (error) {
    res.status(404).send(error);
  }
};
const getByID = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await service.responeID(id);
    res.send(product);
  } catch (error) {
    res.status(404).send(error);
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await service.responeDelete(id);
    res.send("Done successfully!");
  } catch (error) {
    res.status(404).send(error);
  }
};
const chengeSum = async (req, res) => {
  try {
    const { id } = req.params;
    const { operator } = req.params;
    const result = await service.responeSum(id, operator);
    res.send("Done successfully!");
  } catch (error) {
    res.status(404).send(error);
  }
};
const addProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    await service.responseADD(newProduct);
    res.send("Done successfully!");
  } catch (error) {
    res.status(404).send(error);
  }
};
const putProduct = (req, res) => {
  const { id } = req.params;
  const newProduct = req.body;
  service.responsePUT(id, newProduct);
  res.send("Done successfully!");
};

module.exports = {
  getAll,
  getByID,
  addProduct,
  putProduct,
  deleteProduct,
  chengeSum,
};
