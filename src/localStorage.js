let elements = [];

function saveToLocalStorage() {
    localStorage.setItem('elements', JSON.stringify(elements));
}

function addElement() {
    elements.push({
        title: toDo.value,
        details: details.value
    });
    saveToLocalStorage();
}

function loadElements() {
    const savedElements = localStorage.getItem('elements');
    if (savedElements) {
        elements = JSON.parse(savedElements);
    }
    const elementContainer = document.querySelector('#element-container');
    for (const task of elements) {
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
            <div id="element" class="element shadow-lg">

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="Arrow w-10 h-10 my-auto cursor-pointer">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                
                <div class="Content z-0 ">
                    
                    <div class="p-5 flex flex-col mx-auto text-lg items-center">
                        <label for="to-do" class="Title">${task.title}</label>
                        <div class="">${task.details}</div>
                    </div>
                </div>
                
            </div>
        `;


        elementContainer.appendChild(newElement);

        const arrows = document.querySelectorAll('.Arrow');
        const elements = document.querySelectorAll('#element');

        arrows.forEach((arrow, i) => {
            arrow.addEventListener('click', () => {
                elements[i].classList.toggle('active');
                });
        });
    };
}

export { saveToLocalStorage, loadElements, elements, addElement};