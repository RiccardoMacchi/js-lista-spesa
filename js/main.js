// Creazione lista spesa
const listSpesa = ["Pane","Salame","Farina","Biscotti"]

// Recupero ul in pagina html
let listUl = document.querySelector("ul");
console.log(listUl);

// Creazione ciclo while
let i = 0
// Lunghezza della lista -1 che corrisponde alla lunghezza della lista
while (i < listSpesa.length) {
    listUl.innerHTML += `<li><input id="check_me" type="checkbox">${listSpesa[i]}</li>`;
    i++;
}

// Recupero in pagina items aggiunti dall'utente
let btnAdd = document.getElementById("add_items")
btnAdd.addEventListener("click",
    () => {
        let singleItem = document.getElementById("items").value;
        console.log(singleItem);
        
        // Aggiunta scelte dall'utente al nostro arrey
        listSpesa.push(singleItem);
        listUl.innerHTML += `<li><input id="check_me" type="checkbox">${listSpesa[listSpesa.length -1]}</li>`;
        // Ripulita del campo input aggiunta items
        document.getElementById("items").value = "";
    }
)



