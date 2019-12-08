//* Version 2 - Module Pattern
/* 
In this document
- Encapsulation
- Closures 
- IIFE - immediately invoked function expression
*/

// 1. IIFE  Version 1
// const mod = (function() {
//   const inputBox = document.querySelector('.inputBox');
//   const toDoList = document.querySelector('.toDoList');

//   function addItem(item) {
//     let listItem = document.createElement('li');
//     listItem.innerHTML = `<div class="delete"> &times; </div>  ${item}`;
//     toDoList.appendChild(listItem);
//   }
//   function formSubmit(e) {
//     e.preventDefault();
//     if (inputBox.value !== '') {
//       addItem(inputBox.value);
//       inputBox.value = '';
//     }
//   }
//   function deleteItem(e) {
//     if (e.target.className === 'delete') {
//       e.target.parentNode.remove();
//     }
//   }
//   // public information
//   return {
//     deleteItem: deleteItem,
//     formSubmit: formSubmit,
//     addItem: addItem
//   };
// })();

// Version 2
const mod = function() {
  // private
  const inputBox = document.querySelector('.inputBox');
  const toDoList = document.querySelector('.toDoList');

  function addItem(item) {
    let listItem = document.createElement('li');
    listItem.innerHTML = `<div class="delete"> &times; </div>  ${item}`;
    toDoList.appendChild(listItem);
  }
  function formSubmit(e) {
    e.preventDefault();
    if (inputBox.value !== '') {
      addItem(inputBox.value);
      inputBox.value = '';
    }
  }
  function deleteItem(e) {
    if (e.target.className === 'delete') {
      e.target.parentNode.remove();
    }
  }
  // public information
  return {
    deleteItem: deleteItem,
    formSubmit: formSubmit,
    addItem: addItem
  };
};
const newMod = mod();

const submitButton = document.querySelector('.submitButton');
const deleteButton = document.querySelector('.toDoList');
deleteButton.addEventListener('click', newMod.deleteItem);
submitButton.addEventListener('click', newMod.formSubmit);
