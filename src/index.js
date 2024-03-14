document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector('form');
  // add an event listener for the submit button and add a function with e as param
  form.addEventListener("submit", function(e){
    // prevent the form from being submitted
    e.preventDefault()
    // gets the value submitted in the input section
    newP(e.target[0].value)
    form.reset()
  })
});

function newP(todoTask){
  // creates ul and button tag
  let newUl = document.createElement('ul');
  let btn = document.createElement('button');
  // adds an event listener for click and the second param is a function to delete tasks that youve completed
  btn.addEventListener('click', deleteTodoAndAddToCompletedList);
  // adds text to the button for when you want to comeplete your task
  btn.textContent = 'Enter Task'
  // sets the text of what you submitted in the ul
  newUl.textContent = `${todoTask}`
  newUl.appendChild(btn)
  document.querySelector('#tasks').appendChild(newUl)
}

function deleteTodoAndAddToCompletedList(e){
  taskItem = e.target.parentNode
  taskItem.remove();
  document.querySelector('#tasks_completed').appendChild(taskItem)
}