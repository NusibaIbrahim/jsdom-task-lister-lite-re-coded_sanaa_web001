const main = document.querySelector("#main-content");
const taskForm = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

taskForm.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  // e.preventDefault();
let newTask = document.getElementById("new-task-description").value;
taskList.innerHTML +=`
<li>${newTask}
<button data-action="delete" data-matt="PLWERFUL" data-nusiba="downfield">X for delete</button>
<button data-action="edit">EDIT THAT TASK</button>
</li>`
taskform.reset();

});

taskForm.addEventListener("DOMContentLoaded", (e) => {
  console.log(e.target);
  if(e.target.dataset.action === "delete"){
    e.target.parentElement.remove();
  }
});