const { v4: uuidv4 } = require("uuid");

let today = new Date();
class Task {
  id = "";
  description = "";
  date = "";
  constructor(description) {
    this.id = uuidv4();
    this.description = description;
    this.date = today;
  }
}
module.exports = Task;
