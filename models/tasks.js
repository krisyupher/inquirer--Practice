const Task = require("./task");
class Tasks {
  List = {};
  constructor() {
    this.List = {};
  }
  createTask(text) {
    const task = new Task(text);
    this.List[task.id] = task;
  }
}
module.exports = Tasks;
