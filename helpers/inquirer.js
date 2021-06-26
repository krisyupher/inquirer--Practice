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
        name: `${"1".green}. Crear tarea `,
      },
      {
        value: "2",
        name: `${"2.".green} Listar tarea`,
      },
      {
        value: "3",
        name: `${"3.".green} Listar tareas completadas`,
      },
      {
        value: "4",
        name: `${"4.".green} Listar tareas pendientes`,
      },
      {
        value: "5",
        name: `${"5.".green} Completar tarea(s)`,
      },
      {
        value: "6",
        name: `${"6.".green} Norrar tarea`,
      },
      {
        value: "0",
        name: `${"7.".green} Salir `,
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
const inputOpts = [
  {
    type: "input",
    name: "option",
    message: "",
    validate(value) {
      if (value.length === 0) {
        return "Digite un valor";
      } else {
        return true;
      }
    },
  },
];
const inquirerMenu = async () => {
  console.clear();
  console.log("===================".green);
  console.log("Seleccione una opción");
  console.log("===================".green);
  const opt = await inquirer.prompt(menuOpts);
  return opt.option;
};
const pause = async () => {
  await inquirer.prompt(pauseOpts);
};
const inputText = async () => {
  const { option } = await inquirer.prompt(inputOpts);
  return option;
};
module.exports = {
  inquirerMenu,
  pause,
  inputText,
};
