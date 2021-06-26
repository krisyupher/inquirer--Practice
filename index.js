const colors = require("colors");
const { inquirerMenu, pause, inputText } = require("./helpers/inquirer");
const { saveData, readData } = require("./helpers/saveData");
const Tasks = require("./models/tasks");
const main = async () => {
  let option = "";
  const tasks = new Tasks();
  const dataBase = readData();
  if (dataBase) {
    tasks.LoadTasks(dataBase);
  }
  do {
    option = await inquirerMenu();
    switch (option) {
      case "1":
        let text = await inputText();
        tasks.createTask(text);
        break;
      case "2":
        tasks.paintTasks();
        break;
      case "3":
        break;
      case "4":
        break;
      case "5":
        break;
      case "6":
        break;
      case "7":
        break;
      default:
        break;
    }
    saveData(tasks.listArr);
    await pause();
  } while (option !== "0");
};
main();
