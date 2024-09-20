// import { toDoList } from "./repository";
// import { renderList } from "./renderList";


//  export function addDragAndDropEvents(li) {
//     li.addEventListener('dragstart', function (e) {
//         e.dataTransfer.effectAllowed = 'move';
//         e.dataTransfer.setData('text/plain', li.getAttribute('data-index')); // Store the dragged item's index
//         li.classList.add('dragging');
//     });

//     li.addEventListener('dragover', function (e) {
//         e.preventDefault(); // Necessary to allow the drop
//         li.classList.add('drag-over');
//     });

//     li.addEventListener('dragleave', function (e) {
//         li.classList.remove('drag-over');
//     });

//     li.addEventListener('drop', function (e) {
//         e.stopPropagation();
//         li.classList.remove('drag-over');

//         const draggedIndex = e.dataTransfer.getData('text/plain'); // Get the dragged item's index
//         const targetIndex = li.getAttribute('data-index'); // Get the target item's index

//         if (draggedIndex !== targetIndex) {
//             // Swap the tasks in the toDoList array
//             [toDoList[draggedIndex], toDoList[targetIndex]] = [toDoList[targetIndex], toDoList[draggedIndex]];
//             renderList(); // Re-render the list with updated order
//         }
//     });

//     li.addEventListener('dragend', function () {
//         li.classList.remove('dragging');
//         let items = document.querySelectorAll('.list-group-item');
//         items.forEach(item => item.classList.remove('drag-over'));
//     });
// }