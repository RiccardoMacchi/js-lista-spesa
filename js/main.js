// Creazione lista spesa

const listSpesa = ["pane","salame","frutta","biscotti"]

// Recupero ul in pagina html
let listUl = document.querySelector("ul");
console.log(listUl);

// Creazione ciclo while
let i = 0
while (i < listSpesa.length) {
    listUl.innerHTML += `<li>${listSpesa[i]}</li>`;
    i++;
}

// Recupero in pagina items aggiunti dall'utente
let btnAdd = document.getElementById("add_items")
btnAdd.addEventListener("click",
    () => {
        let singleItem = document.getElementById("items").value;
        console.log(singleItem);
        // Aggiunta scelte dall'utente al nostro arrey
        
        // listUl.innerHTML += `<li>${singleItem}</li>`;
        let i = listSpesa.length
        listSpesa.push(singleItem);
        while (i < listSpesa.length) {
            listUl.innerHTML += `<li>${listSpesa[i]}</li>`;
            i++;
        }
    }
)



