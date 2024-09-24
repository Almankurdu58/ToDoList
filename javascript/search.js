import { renderList } from "./renderList";

const searchFeld = document.getElementById("search")
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener('click', search);
searchFeld.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        search();
    }
});

function search() {
    console,log("Hello World");
    let searchValue = searchFeld.value;
    //hier wird deklariert, ob die elemente in der To Do Liste sind
    if (li.includes(searchValue)) {  // checken, ob input nicht leer ist
        const isVisible = li.toLowerCase().includes(value);
        li.element.toggle("hide", !isVisible);
    }
    renderList();
}

   

























// import { toDoList } from "../repository";

// const searchInput = document.querySelector("[dara-search]");

// searchInput.addEventListener("input", (e) => {
//     const value = e.ta;rget.value;
//     toDoList.forEach(li => {
//         const isVisible = li.toLowerCase().includes(value);
//         li.element.toggle("hide", !isVisible);
//     });
// });

// function search() {
//     let searchFeld = document.getElementById("search");
//     let filter = searchFeld.value.toUpperCase(); // Get input and convert it to uppercase for case-insensitive comparison
//     let ul = document.getElementById("task"); // Reference to the list
//     let li = ul.getElementsByTagName("li"); // Get all list items

//     // Loop through all list items and highlight those that match the search query
//     for (let i = 0; i < li.length; i++) {
//         let txtValue = li[i].textContent || li[i].innerText; // Get the text content of the list item

//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             li[i].classList.add('highlight'); // Add highlight class to matched items
//         } else {
//             li[i].classList.remove('highlight'); // Remove highlight class from unmatched items
//         }
//     }
// }

//   inputfeld holen von search
//   value von inputfeld
//   in Array für jedes element vergleichen ob dieses Inputfeld im Array enthalten isFinite(stirngs vergleichen mit substring)
