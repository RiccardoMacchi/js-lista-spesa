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
