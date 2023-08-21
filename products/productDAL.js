const jsonfile = require("jsonfile");
const FILE_SRC = "dataBase/data.json";

const getData = async () => {
  try {
    const data = await jsonfile.readFile(FILE_SRC);
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const writeData = async (updatedProducts) => {
  try {
    await jsonfile.writeFile(FILE_SRC, updatedProducts);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { getData, writeData };
