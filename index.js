const colors = require("colors");
const {
  inquirerMenu,
  pause,
  inputText,
  listToDelete,
  confirm,
  listCheck,
} = require("./helpers/inquirer");
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
        let text = await inputText("Description");
        tasks.createTask(text);
        await pause("Tarea creada, presione Enter");
        break;
      case "2":
        tasks.paintTasks();
        await pause("presione Enter");
        break;
      case "3":
        tasks.paintCompleted(true);
        await pause("presione Enter");
        break;
      case "4":
        tasks.paintCompleted(false);
        await pause("presione Enter");
        break;
      case "5":
        let ids = await listCheck(tasks.listArr);
        tasks.toggleCompleted(ids);
        await pause("presione Enter");
        break;
      case "6":
        let id = await listToDelete(tasks.listArr);
        if (id === 0) {
          break;
        } else {
          let ok = await confirm("Estas seguro");
          if (ok) {
            tasks.DeleteTask(id);
            await pause("Tarea borrada, presione Enter");
          }
        }
        break;
      default:
        break;
    }
    saveData(tasks.listArr);
  } while (option !== "0");
};
main();
