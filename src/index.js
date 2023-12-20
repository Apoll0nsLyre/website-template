import { addElement, elements, saveToLocalStorage, loadElements} from './localStorage.js';

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

const listElement = {
    title: toDo.value,
    details: details.value
};

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

// Edit-button affichage

taskForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Empêcher le formulaire de se soumettre normalement

    // Vérifier si le champ de saisie principal n'est pas vide
    if (toDo.value.trim() !== '') {
        // Créer un nouvel élément div
        var newElement = document.createElement('div');
        newElement.classList = 'Element flex flex-row';

        // Ajouter le contenu HTML à l'élément
        newElement.innerHTML = `

        <div class="Edit-button flex flex-col text-center">
            <div class="Delete-button h-1/2 flex justify-center align-center items-center cursor-pointer"> <p>Delete</p> </div>
            <div class="Check h-1/2">
                
                <input type="checkbox" class="h-full w-full cursor-pointer">
                <label></label>
            </div>
        </div>

        <div id="element" class="shadow-lg">

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="Arrow w-10 h-10 my-auto cursor-pointer">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            
            <div class="Content z-0 ">
                
                <div class="p-5 flex flex-col mx-auto text-lg items-center">
                    <label for="to-do" class="Title">${toDo.value}</label>
                    <div class="">${details.value}</div>
                </div>
            </div>
            
        </div> 
        `;

        // Ajouter le nouvel élément à la page
        elementContainer.appendChild(newElement);
        modal.classList.toggle('active');

        // Enregistrer dans le stockage local
        

        addElement(listElement);

        // Effacer les champs de saisie
        toDo.value = '';
        details.value = '';

        // Ajouter un gestionnaire d'événements pour le bouton de suppression

        
        const arrow = document.querySelector('.Arrow');
        const Element = document.querySelector('#element');

        arrow.addEventListener('click', function () {
            Element.classList.toggle('active');
        });
    }

        
});

loadElements();