const container = document.querySelector('container');
const addButton = document.querySelector('#add-button');
const deleteButton = document.querySelector('#delete-button');
const modal = document.querySelector('#form-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const elementContainer = document.querySelector('#element-container');
const form = document.querySelector('form');

const submitButton = document.querySelector('#submit');
const toDo = document.querySelector('#to-do');
const details = document.querySelector('#details');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    modal.classList.toggle('active');
  });
});

const addElement = (toDo, details) => {
  const element = document.createElement('div');
  element.classList.add('element');
  element.innerHTML = `
  <input type="checkbox" id="to-do" name="to-do" class="w-5 cursor-pointer">
  <div class="flex flex-col mx-auto text-lg items-center">
      <label for="to-do" class="">To do :</label>
      <div class="">Details</div>
  </div>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" id="delete-button" class="w-8 h-8 cursor-pointer my-auto">
      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
    </svg>
  `;
  elementContainer.appendChild(element);
}

form.addEventListener('submit', () => {
  addElement(toDo.value, details.value); 
  modal.classList.toggle('active');
});
