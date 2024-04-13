#!/user/bin/env node

import inquirer from "inquirer"

let todos = [];
let condition = true;

while(condition)
{

let addTask =await inquirer.prompt(
    
     [
        {

        type:  'input',
        name: 'toDo',
       message: "What you want to add in your toDos?"
     },
     {
        type:  'confirm',
        name: 'addMore',
     message: "Do you want to addMore?",
     default: "false"

     }
]
);
todos.push(addTask.toDo);
condition = addTask.addMore
console.log(todos)
}