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
  DeleteTask(id = "") {
    if (this.List[id]) {
      delete this.List[id];
    }
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
  paintCompleted(completed = true) {
    this.listArr.map((key, index) => {
      if (completed) {
        if (key.date) {
          console.log(
            `${colors.green(index + 1)} ${key.description} ::  ${
              key.date.green
            }`
          );
        }
      } else {
        if (!key.date) {
          console.log(
            `${colors.green(index + 1)} ${key.description} :: ${
              "Pendiente".red
            }`
          );
        }
      }
    });
  }
  toggleCompleted(ids = []) {
    this.listArr.forEach((key) => {
      if (ids.includes(key.id)) {
        this.List[key.id].date = new Date().toISOString();
      } else {
        this.List[key.id].date = null;
      }
    });
  }
}
module.exports = Tasks;
