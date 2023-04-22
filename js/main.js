// Funzione di reverse da assegnare alla "Qualunque"
function reverse(text) {
    let NuovaParola = "";
    for (let c = text.length - 1; c >= 0; c--) {
        NuovaParola += text[c];
    }
    return NuovaParola;
}

// PALINDROMA

// Inizializzione vabili
let ParolaUtente = document.getElementById("ParolaUtente");
let Parolalcontrario;
let btn = document.getElementById("Testparola");

// Aggiungo Evento click con funzione di controllo della parola

btn.addEventListener("click", function() {
    DatoUtente = ParolaUtente.value;
    DatoUtente = DatoUtente.toLowerCase();
    console.log(DatoUtente);
    Parolalcontrario = reverse(DatoUtente);
    
    if (Parolalcontrario == DatoUtente) {
        console.log(Parolalcontrario + " è una parola palindroma");
        return
    } else { 
        console.log("NO");
    }  
})

// PALINDROMA

// PARI O DISPARI


