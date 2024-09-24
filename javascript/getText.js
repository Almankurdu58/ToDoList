import { renderList } from './renderList.js';
import { toDoList } from "./repository.js";
 

let inputFeld = document.getElementById('toDo');
const button = document.getElementById('apply');
button.addEventListener('click', getText);
inputFeld.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        getText();
    }
});

function getText() {
    let inputValue = inputFeld.value;

    if (inputValue) {  // checken, ob input nicht leer ist
        toDoList.push(inputValue);
        inputFeld.value = '';

        renderList();
    }
}



//nächste Schritte:
//angular
//vue.js
