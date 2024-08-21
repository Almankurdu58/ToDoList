import { toDoList } from "./repository.js";

export function renderList() {
    let ul = document.getElementById('task');
    ul.innerHTML = '';  // damit wird ul element geleert. Mit innerhtml bekommt man die elemente in Html

    toDoList.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add("")
        
        // container für buttons
        let buttonContainer = document.createElement('div');

        //editieren
        let editButton = document.createElement('Button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index));
        editButton.classList.add("btn"); 
        editButton.classList.add("btn-primary");

        //löschen
        let deleteButton = document.createElement('deleteButton');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index)); // damit wird Jeweilige element wählbar: also zu identifisieren 
        deleteButton.classList.add("btn"); 
        deleteButton.classList.add("btn-danger");

        //die buttons werden in der Liste hingefügt
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        li.appendChild(buttonContainer);
        ul.appendChild(li);  
    });
}
function editTask(index) {
    let newName = prompt("Edit Task:", toDoList[index]); // öffnet prompt dialog box
    if (newName != null && newName.trim() !== "") { // erste ist für abbrechen und 2. für leerzeichen drücken und enter drücken
        toDoList[index] = newName;
        renderList();
    }
}
function deleteTask(index) {
    toDoList.splice(index,1);
    renderList();
}
