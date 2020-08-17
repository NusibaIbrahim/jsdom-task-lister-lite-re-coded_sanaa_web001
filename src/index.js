const main = document.querySelector("#main-content");
const taskForm = document.querySelector("#create-task-form");
const taskList = document.querySelector("#tasks");

taskForm.addEventListener("DOMContentLoaded", (e) => {
  // your code here
  e.preventDefault();
let newTask = document.getElementById("new-task-description").value;
taskList.innerHTML +=`
<li>${newTask}
<button class="delet-button">X for delete</button>
</li>`
taskform.reset();

});

taskForm.addEventListener("DOMContentLoaded", (e) => {
  console.log(e.target);
  e.target;
});