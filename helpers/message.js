const colors = require("colors");
const { resolve } = require("path");

const viewMenu = async () => {
  return new Promise((resolve, reject) => {
    console.clear();
    console.log("===================".green);
    console.log("Seleccione una opción");
    console.log("===================".green);

    console.log(`${"1".green}. Crear tarea `);
    console.log(`${"2".green}. Listar tarea `);
    console.log(`${"3".green}. Listar tareas completadas `);
    console.log(`${"4".green}. Listar tareas pendientes `);
    console.log(`${"5".green}. Completar tarea(s) `);
    console.log(`${"6".green}. Norrar tarea `);
    console.log(`${"0".green}. Salir `);

    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question("Presione Enter", (opt) => {
      readline.close();
      resolve(opt);
    });
  });
};

const pause = () => {
  return new Promise((resolve, reject) => {
    const readline = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readline.question(`Presione ${"Enter".green} para continuar`, (opt) => {
      resolve(opt);
      readline.close();
    });
  });
};
module.exports = {
  viewMenu,

  pause,
};
