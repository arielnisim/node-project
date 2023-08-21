const { log, error } = require("console");
const dal = require("./productDAL");

const response = async () => {
  try {
    const data = await dal.getData();
    return data;
  } catch (error) {
    console.log(error);
  }
};
const responeID = async (id) => {
  try {
    const data = await dal.getData();
    let product;
    data.forEach((v) => {
      if (v.id === id) {
        product = v;
      }
    });
    return product;
  } catch (error) {
    console.log(error);
  }
};
const responeDelete = async (id) => {
  try {
    const data = await dal.getData();
    data.forEach((v, k) => {
      if (v.id === id) {
        data.splice(k, 1);
      }
    });
    await dal.writeData(data);
  } catch (error) {
    console.log(error);
  }
};
const responeSum = async (id, operator) => {
  try {
    const data = await dal.getData();
    data.forEach((v, k) => {
      if (v.id === id) {
        if (operator === "1") {
          data[k]["sum"]++;
        }
        if (operator === "2") {
          data[k]["sum"]--;
        }
      }
    });
    await dal.writeData(data);
  } catch (error) {
    console.log(error);
  }
};
const responseADD = async (newProduct) => {
  try {
    const data = await dal.getData();
    data.push(newProduct);
    await dal.writeData(data);
  } catch (error) {
    console.log(error);
  }
};
const responsePUT = async (id, newProduct) => {
  try {
    let data = await dal.getData();
    data.forEach((v, k) => {
      if (v.id === id) {
        data[k] = newProduct;
      }
    });
    await dal.writeData(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  response,
  responeID,
  responseADD,
  responsePUT,
  responeDelete,
  responeSum,
};
