let taskList = [];

function createTask() {
  let taskTitle = document.getElementById("task-title").value;
  let taskDesc = document.getElementById("task-desc").value;
  let taskDate = document.getElementById("task-date").value;

  let task = {
    title: taskTitle,
    description: taskDesc,
    date: taskDate
  };
  taskList.push(task);
  displayTasks();
}

function displayTasks() {
  let taskListElem = document.getElementById("task-list");
  taskListElem.innerHTML = "";

  for (let i = 0; i < taskList.length; i++) {
   
    let task = taskList[i];
    let taskElem = document.createElement("li");
    taskElem.innerHTML = "The task is " +" "+task.title +" " + task.description + "and it should be done by"+" " + task.date;
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Done";
    deleteBtn.onclick = function() {
      deleteTask(i);
    };
    taskElem.appendChild(deleteBtn);
    taskListElem.appendChild(taskElem);

if(taskList<0){
  let message=document.getElementById('message')
  message.innerHTML = 'You dont have any task to do for now'
      
      }
      else (taskList>0)
      {
        message.innerHTML='You have undone tasks to do '
      }

  }
}

function deleteTask(index) {
  taskList.splice(index, 1);
  displayTasks();
}

function deleteAllTasks() {
  taskList = [];
  displayTasks();
}
