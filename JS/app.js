let Prep = {
    todo: "prepare ingredients",
    status: "complete"
  }
let Tools = {
    todo: "take out relevent pots, pans, and utensils",
    status: "complete"
  }
let Cook = {
    todo: "cook the food",
    status: "incomplete"
  }
let Serve = {
    todo: "platter the food and serve",
    status: "incomplete"
  }
  
let todolist = [Prep, Tools, Cook, Serve];
let completedTodos = [];
  
var arraylength = todolist.length;
  
for (var i = 0; i < arraylength; i++) {
    if (Object.values(todolist[i]).indexOf('complete') > -1) {
        completedTodos.push(todolist[i]);
    }
  };
  
var completelength = completedTodos.length

for (var o = 0; o < completelength; o++) {
    let {
        todo
    } = completedTodos[o]
      console.log(todo);
}