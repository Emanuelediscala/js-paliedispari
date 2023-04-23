// Funzione di reverse da assegnare alla "Qualunque"
function reverse(text) {
    let NuovaParola = "";
    for (let c = text.length - 1; c >= 0; c--) {
        NuovaParola += text[c];
    }
    return NuovaParola;
}
// Funzione di Creazione numero Random
function getRndnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// PALINDROMA

// Inizializzione vabili
let ParolaUtente = document.getElementById("ParolaUtente");
let Parolalcontrario;
let btn = document.getElementById("Testparola")
let dichiarazioneParola; 
let Palindroma = document.getElementById ("Palindroma"); 
 // Aggiungo Evento click con funzione di controllo della parol
btn.addEventListener("click", function () {
    DatoUtente = ParolaUtente.value;
    DatoUtente = DatoUtente.toLowerCase();
    Parolalcontrario = reverse(DatoUtente);
    if (Parolalcontrario == DatoUtente) {
        dichiarazioneParola = document.createElement("h3");
        dichiarazioneParola.innerText =`${Parolalcontrario} è una parola palindroma`;
        Palindroma.append(dichiarazioneParola);
    } else {
        dichiarazioneParola = document.createElement("h3");
        dichiarazioneParola.innerText =`${Parolalcontrario} Non è una parola palindroma`;
        Palindroma.append(dichiarazioneParola);
    }
})
 // PALINDROM
 // PARI O DISPARI
 // Inizializzione vabili
let SceltaUtente = document.getElementById("NumeroUtente");
let Sceltapari = document.getElementById("Pari");
let SceltaDispari = document.getElementById("Dispari");
let Possibilita = document.getElementById("SceltaPariDispari")
let Startgo = document.getElementById("letsgo");
let RandomNumber;
let Numeroscelto;
let finalNumber;
let GenFinalNumber = document.getElementById("GenFinalNumber");
let Specchietto = document.getElementById("Specchietto");
let PCresult;
let genPcNumber = document.getElementById("GenPcNumber");


Startgo.addEventListener("click", function () {
     // Definsco valore utente
    Numeroscelto = parseInt(SceltaUtente.value);
     // Definisco la Scelta del pari o dispari
    let decisione;
    decisione = Possibilita.value;
     // Inserisco le funzioni di Random per user e pc
    RandomNumber = getRndnumber(1, 5);
     // Combo per Numeri UTENTI
    FinalNumber = Numeroscelto + RandomNumber;
    

    // CONDIZIONE PER DECRETARE IL VINCITORE
    
    if (FinalNumber % 2 == Possibilita.value) {
        console.log("HAI VINTO");
        let SpamWin = document.createElement("p")
        SpamWin.innerHTML = "Hai vinto"
        Specchietto.append(SpamWin)
        
    }
    else if (FinalNumber % 2 !== Possibilita.value) {
        console.log("HAI PERSO")
        let SpamLose = document.createElement("p")
        SpamLose.innerHTML = "Hai perso"
        Specchietto.append(SpamLose)
    }
    GenFinalNumber.innerHTML = FinalNumber;
    genPcNumber.innerHTML = RandomNumber;
});




