//* Version 1 - Basic
/* 
In this document
- need to select all submit buttons to monitor form submits
- event delegation
*/

function formSubmit(e) {
  const inputBox = document.querySelector('.inputBox');
  e.preventDefault();
  if (inputBox.value !== '') {
    addItem(inputBox.value);
  }
  inputBox.value = '';
}
function addItem(input) {
  let toDoList = document.querySelector('.toDoList');
  let createItem = document.createElement('li');
  createItem.innerHTML = `<div class="delete"> &times; </div>  ${input}`;
  toDoList.appendChild(createItem);
}
function deleteItem(e) {
  if (e.target.className === 'delete') {
    e.target.parentNode.remove();
  }
}

const submitButton = document.querySelector('.submitButton');
const deleteButton = document.querySelector('.toDoList');
deleteButton.addEventListener('click', deleteItem);
submitButton.addEventListener('click', formSubmit);
