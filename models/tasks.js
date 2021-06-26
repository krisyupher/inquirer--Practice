const Task = require("./task");
const colors = require("colors");
class Tasks {
  List = {};
  get listArr() {
    const listAux = [];
    Object.keys(this.List).forEach((key) => {
      listAux.push(this.List[key]);
    });
    return listAux;
  }
  constructor() {
    this.List = {};
  }
  createTask(text) {
    const task = new Task(text);
    this.List[task.id] = task;
  }
  LoadTasks(dataBase = []) {
    dataBase.map((key) => {
      this.List[key.id] = key;
    });
  }
  paintTasks() {
    this.listArr.map((key, index) => {
      console.log(
        `${colors.green(index + 1)} ${key.description} :: ${
          key.date === null ? "Pendiente".red : "Completada".green
        }`
      );
    });
  }
}
module.exports = Tasks;
