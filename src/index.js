const container = document.querySelector('container');
const addButton = document.querySelector('#add-button');
const deleteButton = document.querySelectorAll('#delete-button');
const modal = document.querySelector('#form-container');
const modalTriggers = document.querySelectorAll('.modal-trigger');
const elementContainer = document.querySelector('#element-container');
const taskForm = document.querySelector('#task-form');
const deleteTriggers = document.querySelectorAll('.delete-trigger');
const deleteContainer = document.querySelector('.delete-container');

const submitButton = document.querySelector('#submit');
const toDo = document.querySelector('#toDo');
const details = document.querySelector('#details');

modalTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    modal.classList.toggle('active');
  });
});

deleteTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
        deleteContainer.classList.toggle('active');
    });
});

taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Vérifier si le champ de saisie principal n'est pas vide
    if (toDo.value.trim() !== '') {
        // Créer un nouvel élément div
        var newElement = document.createElement('div');
        newElement.id = 'element';
        newElement.className = '';

        // Ajouter le contenu HTML à l'élément
        newElement.innerHTML = `
            <input type="checkbox" id="to-do" name="to-do" class="w-5 cursor-pointer">
            <div class="flex flex-col mx-auto text-lg items-center">
                <label for="to-do" class="Title">${toDo.value}</label>
                <div>${details.value}</div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="" id="delete-button" class="delete-trigger w-8 h-8 cursor-pointer my-auto">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clip-rule="evenodd" />
            </svg>
        `;

        // Ajouter le nouvel élément à la page
        elementContainer.appendChild(newElement);
        modal.classList.toggle('active');
        // Effacer les champs de saisie
        toDo.value = '';
        details.value = '';

        // Ajouter un gestionnaire d'événements pour le bouton de suppression

        const deleteButton = newElement.querySelector('#delete-button');
        deleteButton.addEventListener('click', function () {
            deleteContainer.classList.toggle('active');
        });
        
    }
});

