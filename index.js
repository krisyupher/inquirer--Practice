const colors = require("colors");
const { inquirerMenu, pause } = require("./helpers/inquirer");
const main = async () => {
  let option = "";
  do {
    option = await inquirerMenu();
    await pause();
  } while (option !== "0");
};
main();
