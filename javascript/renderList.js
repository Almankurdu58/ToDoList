import { toDoList } from "./repository.js";

export function renderList() {
    let ul = document.getElementById('task');
    ul.innerHTML = '';  // damit wird ul element geleert. Mit innerhtml bekommt man die elemente in Html
    ul.classList.add("myStyle");
    
    toDoList.forEach((item, index) => {
        let li = document.createElement('li');
        li.textContent = item;
        li.classList.add("list-group-item")
        li.setAttribute('draggable', 'true'); // Make the list item draggable
        li.setAttribute('data-index', index); // Store the index of the item

        // container für buttons
        li.classList.add("buttonContainer");

        //editieren
        let editButton = document.createElement('Button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', () => editTask(index));
        editButton.classList.add("btn"); 
        editButton.classList.add("btn-primary");
        editButton.classList.add("buttonStyle");
        editButton.classList.add("editButton");


        //löschen
        let deleteButton = document.createElement('Button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(index)); // damit wird Jeweilige element wählbar: also zu identifisieren 
        deleteButton.classList.add("btn"); 
        deleteButton.classList.add("btn-danger");
        deleteButton.classList.add("buttonStyle");
        deleteButton.classList.add("deleteButton");
  


        //die buttons werden in der Liste hingefügt
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        ul.appendChild(li);
        

         // Add drag-and-drop events
         addDragAndDropEvents(li);
        //  search();
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

function addDragAndDropEvents(li) {
    li.addEventListener('dragstart', function (e) {
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', li.getAttribute('data-index')); // Store the dragged item's index
        li.classList.add('dragging');
    });

    li.addEventListener('dragover', function (e) {
        e.preventDefault(); // Necessary to allow the drop
        li.classList.add('drag-over');
    });

    li.addEventListener('dragleave', function (e) {
        li.classList.remove('drag-over');
    });

    li.addEventListener('drop', function (e) {
        e.stopPropagation();
        li.classList.remove('drag-over');

        const draggedIndex = e.dataTransfer.getData('text/plain'); // Get the dragged item's index
        const targetIndex = li.getAttribute('data-index'); // Get the target item's index

        if (draggedIndex !== targetIndex) {
            // Swap the tasks in the toDoList array
            [toDoList[draggedIndex], toDoList[targetIndex]] = [toDoList[targetIndex], toDoList[draggedIndex]];
            renderList(); // Re-render the list with updated order
        }
    });

    li.addEventListener('dragend', function () {
        li.classList.remove('dragging');
        let items = document.querySelectorAll('.list-group-item');
        items.forEach(item => item.classList.remove('drag-over'));
    });
}

