const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todo");

document.addEventListener("DOMContentLoaded",gettodosfromlocalStorage);
todobutton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);
filteroption.addEventListener("click", filterTodo);


function addTodo(event) {
    event.preventDefault();
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newtodo = document.createElement("li");
    newtodo.innerText = todoinput.value;
    newtodo.classList.add("todo-item");
    todoDiv.appendChild(newtodo);
    // check mark btn
    // saving to local storage

    savinglocalstorage(todoinput.value);
    // button

    const completedbutton = document.createElement("button");
    completedbutton.innerHTML = '<i class="fas fa-check"></i>';
    completedbutton.classList.add("complete-btn");
    todoDiv.appendChild(completedbutton);
    // check trash btn
    const trashbutton = document.createElement("button");
    trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
    trashbutton.classList.add("trash-btn");
    todoDiv.appendChild(trashbutton);
    
    // Append to list
    todolist.appendChild(todoDiv);
    console.log(todolist);
    // Clear todo input value
    todoinput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    
    // Delete todo
    if (item.classList.contains("trash-btn")) {
        const todo = item.parentElement;
        removetoLocalStorage(todo);
        todo.remove();
    }
    // Check mark
    if (item.classList.contains("complete-btn")) {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);
    }
}
function filterTodo(event){

    const Todos=todolist.childNodes;
    // console.log(event.target);
    Todos.forEach(function(todo){
        switch(event.target.value){
            case "All":
                todo.style.display="flex";
                break;
            case "Completed":
                if(todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
              break;
            case "UnCompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display="flex";
                }
                else{
                    todo.style.display="none";
                }
                break;
        }
    })
}

// Saving to local storage
function savinglocalstorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));

}
function gettodosfromlocalStorage(){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    todos.forEach(function(todo){
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
    
        const newtodo = document.createElement("li");
        newtodo.innerText = todo;
        newtodo.classList.add("todo-item");
        todoDiv.appendChild(newtodo);
        // check mark btn
    
        const completedbutton = document.createElement("button");
        completedbutton.innerHTML = '<i class="fas fa-check"></i>';
        completedbutton.classList.add("complete-btn");
        todoDiv.appendChild(completedbutton);
        // check trash btn
        const trashbutton = document.createElement("button");
        trashbutton.innerHTML = '<i class="fas fa-trash"></i>';
        trashbutton.classList.add("trash-btn");
        todoDiv.appendChild(trashbutton);
        
        // Append to list
        todolist.appendChild(todoDiv);
    })
}
function removetoLocalStorage(todo){
    let todos;
    if(localStorage.getItem("todos")===null){
        todos=[];
    }
    else{
        todos=JSON.parse(localStorage.getItem("todos"))
    }
    const todoindex=todo.children[0].innerText;
    todos.splice(todos.indexOf(todoindex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}