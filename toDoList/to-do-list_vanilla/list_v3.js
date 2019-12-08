//* Version 3 - OOP
/* 
In this document
- constructor function
- prototypal inheritence
- event delegation
- bind
- new keyword
*/

const ToDoList = function(name) {
  this.input = document.querySelector(`[data-input="${name}"]`);
  this.button = document.querySelector(`[data-button="${name}"]`);
  this.list = document.querySelector(`[data-list="${name}"]`);

  this.formSubmit = function(input) {
    let createItem = document.createElement('li');
    createItem.innerHTML = `<div class="delete"> &times;</div> ${input}`;
    this.list.appendChild(createItem);
  };
  // public
  this.init = function() {
    this.addEntry(this.input);
    this.delete();
  };
};

ToDoList.prototype.addEntry = function(input) {
  this.button.addEventListener(
    'click',
    function(e) {
      e.preventDefault();
      if (input.value !== '') {
        this.formSubmit(input.value);
      }
      input.value = null;
    }.bind(this)
  );
};

ToDoList.prototype.delete = function() {
  this.list.addEventListener('click', function(e) {
    if (e.target.className === 'delete') {
      e.target.parentNode.remove();
    }
  });
};

const exampleList = new ToDoList('to do example');
exampleList.init();
const groceryList = new ToDoList('grocery list');
groceryList.init();
