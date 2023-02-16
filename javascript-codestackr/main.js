// single line comments
/* double line 

comments */
// let can be reasigned while const can't be reasigned.
// there are primitive n reference data types
//variables are case sensitives
// should be meaningful and descriptive
// cannot start with a number 
// cannot contain a space or hyphen (-)
// cannot be a reserved word




// const convertPercentage = num =>
//    num / 100;

// console.log(convertPercentage(0));
//how functions are wriiteen in es6

// const btn = document.getElementById('myBtn');
// btn.addEventListener('mouseover', (e) => {
//   btn.style.background = 'blue'
//   // console.log(e);
// });

const newTask = document.querySelector('#new-task-input');
const addTaskBtn = document.querySelector('add-new-task-btn')
const removeCompleteBtn = document.querySelector('.remove-complete-btn');
const taskList = document.querySelector('.task-list');
const taskTemplate = document.querySelector('#task-template');
let id = 1;

newTask.addEventListener('keyup', (e) => {
  if (e.keyCode === 13 && inputValid()){
    addTask();
  }
});

addTaskBtn.addEventListener('click', () => {
  if (inputValid()) {
    addTask();
  }
});

+removeCompleteBtn.addEventListener('click', () => {
  const tasks = document.querySelectorAll('.task');
  tasks.forEach(task => {
    const checked = task.querySelector('input').checked;
    if(checked)(
      task.remove()
    )
  })
});

+function addTask(){
  const taskElement = document.importNode(taskTemplate.textContent, true);
  const checkbox = taskElement.querySelector('input');
  checkbox.id = id;
  const label = taskElement.querySelector('label');
  label.htmlFor = id;
  label.append(newTask.value);
  taskList.appendChild(taskElement);
  newTask.value = '';
  id++;
}
+function inputValid(){
  return newTask.value !== ''

}


