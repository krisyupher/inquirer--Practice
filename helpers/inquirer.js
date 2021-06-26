const inquirer = require("inquirer");
const colors = require("colors");
const menuOpts = [
  {
    type: "list",
    name: "option",
    message: "¿Qué desea hacer ?",
    choices: [
      {
        value: "1",
        name: "1. Crear tarea",
      },
      {
        value: "2",
        name: "2. Listar tarea",
      },
      {
        value: "3",
        name: "3. Listar tareas completadas",
      },
      {
        value: "4",
        name: "4. Listar tareas pendientes",
      },
      {
        value: "5",
        name: "5. Completar tarea(s)",
      },
      {
        value: "6",
        name: "6. Norrar tarea",
      },
      {
        value: "0",
        name: "7. Salir ",
      },
    ],
  },
];
const pauseOpts = [
  {
    type: "input",
    name: "option",
    message: "presione Enter",
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("===================".green);
  console.log("Seleccione una opción");
  console.log("===================".green);
  const opt = await inquirer.prompt(menuOpts);
  return opt;
};
const pause = async () => {
  await inquirer.prompt(pauseOpts);
};
module.exports = {
  inquirerMenu,
  pause,
};
