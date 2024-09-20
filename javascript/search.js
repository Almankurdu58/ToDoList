debugger;
import { toDoList } from "./repository.js";
let searchFeld = document.getElementById("search");
let searchValue = searchFeld.value;
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener('click', search);

// console.log("test")
    let input, filter, ul, li, a, i, txtValue;
    // filter = input.value.toUpperCase();
    ul = document.getElementById("task");
    li = ul.getElementsByTagName("li");

    // for (i = 0; i < li.length; i++) {
    //     a = li[i].getElementsByTagName("a")[0];
    //     txtValue = a.textContent || a.innerText;

    //     if (txtValue.toUpperCase().indexOf(filter) > -1) {
    //         li[i].style.display = "";
    //     } else {
    //         li[i].style.display = "none";
    //     }
    // }
    console.log(ul)
    console.log(li)
    console.log(toDoList)



//   inputfeld holen von search
//   value von inputfeld
//   in Array für jedes element vergleichen ob dieses Inputfeld im Array enthalten isFinite(stirngs vergleichen mit substring)
