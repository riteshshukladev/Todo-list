const todoinput = document.querySelector(".todo-input");
const todobutton = document.querySelector(".todo-button");
const todolist = document.querySelector(".todo-list");
const filteroption = document.querySelector(".filter-todo");

todobutton.addEventListener("click", addTodo);
todolist.addEventListener("click", deleteCheck);

function addTodo(event){
    event.preventDefault();
    const todoDiv= document.createElement("div");
    todoDiv.classList.add("todo");
   
    const newtodo = document.createElement("li");
    newtodo.innerText = todoinput.value;
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
    console.log(todolist);
    // Clear todo input value
    todoinput.value = "";
}

function deleteCheck(e){
    const item=e.target;
    // Delete todo
    if(item.classList.contains("trash-btn")){
        const todo=item.parentElement;
        todo.remove();
    }
    // Check mark
    if(item.classList.contains("complete-btn")){
        const todo=item.parentElement;
        todo.classList.toggle("completed");
    }
}
