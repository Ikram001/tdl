const taskInput = document.querySelector("#taskInput");
const addTask = document.querySelector("#addTask");
const unorderedList = document.querySelector("#ul");


let createTask = () => {

    let newList = document.createElement("li");

    let taskCompleted = document.createElement("button");
    taskCompleted.innerText = "✅";
    newList.appendChild(taskCompleted);

    taskCompleted.addEventListener("click",()=>{
        if(taskCompleted){
            taskText.classList.toggle("completed");
        }
    })

    let taskText = document.createElement("p");
    if(taskInput.value === ""){
        return;
    }
    taskText.innerText = taskInput.value;
    newList.appendChild(taskText);

    let removeTask = document.createElement("button");
    removeTask.innerText = "❌";
    newList.appendChild(removeTask);

    removeTask.addEventListener("click",()=>{
        if(removeTask){
            unorderedList.removeChild(newList);
        }
    }) 

    unorderedList.appendChild(newList);
    taskInput.value = "";
}

addTask.addEventListener("click", createTask)

taskInput.addEventListener("keypress", (event) =>{
    if (event.key === "Enter") { 
        createTask();
    }
  });