const fs = require("fs");
const archivo = "./dataBase/data.json";
const saveData = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};
const readData = () => {
  if (!fs.existsSync(archivo)) {
    return false;
  } else {
    const info = fs.readFileSync(archivo, { encoding: "utf-8" });
    return JSON.parse(info);
  }
};
module.exports = {
  saveData,
  readData,
};
