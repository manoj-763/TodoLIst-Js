

let todoItemsContainer = document.getElementById("todoItemsContainer");
let addTodoButton = document.getElementById("addTodoButton");


let todoList = [{
        text: "learn HTML",
        uniqueNo: 1
    },
    {
        text: "Learn CSS",
        uniqueNo: 2
    },
    {
        text: "Learn JavaScript",
        uniqueNo: 3
    },
];

let todoCount = todoList.length;


function onTodoStatusChange(checkboxId, labelId){
    
    let checkboxElement = document.getElementById(checkboxId);
    let labelElement = document.getElementById(labelId);
    labelElement.classList.toggle("checked");
};


// function for delete
function  onDeleteTodo(todoId){
    let todoElement = document.getElementById(todoId);
    todoItemsContainer.removeChild(todoElement);
};

function createTodoList(todo) {
    let todoId = "todo" + todo.uniqueNo;
    let checkboxId = "checkbox" + todo.uniqueNo;
    let labelId = "label" + todo.uniqueNo;

    // for list 
    let listElement = document.createElement("li"); 
    listElement.classList.add("todo-item-container", "d-flex", "flex-row"); 
    listElement.id = todoId;
    todoItemsContainer.appendChild(listElement); 

    // for Input Tag//
    let inputElement = document.createElement("input");
    inputElement.id = checkboxId;
    inputElement.onclick = function(){
        onTodoStatusChange(checkboxId, labelId);
    };
    inputElement.type = ("checkbox"); 
    inputElement.classList.add("checkbox-input");
    listElement.appendChild(inputElement);

    let divElement = document.createElement("div");
    divElement.classList.add("d-flex", "flex-row", "label-container");
    listElement.appendChild(divElement);

    // For label element
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", checkboxId);
    labelElement.id = labelId;
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text;
    divElement.appendChild(labelElement);


    //  for delete div
    let deleteIcon = document.createElement("div");
    deleteIcon.classList.add("delete-icon-container");
    divElement.appendChild(deleteIcon);

    // for delete icon
    let icon = document.createElement("i");
    icon.classList.add("far", "fa-trash-alt", "delete-icon");
    deleteIcon.onclick = function(){
        onDeleteTodo(todoId);
    };
    deleteIcon.appendChild(icon);

}



for (let todo of todoList) {
    createTodoList(todo);
}

// event listner For Add Button 
function onAddTodo(){
    let userInputElement = document.getElementById("todoUserInput");
    let userInputValue = userInputElement.value;

    if(userInputValue === ""){
        alert("Enter Valid Text");
        return;
    }
    todoCount = todoCount +1;
    let newTodo = {
        text: userInputValue,
        uniqueNo: todoCount
    };
    createTodoList(newTodo);
    userInputElement.value = "";
}

addTodoButton.onclick=function(){
    onAddTodo();
};