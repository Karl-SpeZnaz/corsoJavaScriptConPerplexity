console.log("JavaScript è collegato correttamente!, bene");
console.log('ricorda di modificare lo sfondo')

//*--------------esercizio1------------
const nomeSito = 'Progetto JavaScript';
const admin = 'Aggiorna e modifica';
const annoCreazione = 2026;
const sitoOnline = true;
console.log(nomeSito);
console.log(typeof nomeSito);
console.log(admin);
console.log(typeof admin);
console.log(annoCreazione);
console.log(typeof annoCreazione);
//*--------------esercizio2-----------
const nomeProdotto = 'telefono';
const prezzo = 200;
const quantitaScelta = 2;
const totale = prezzo * quantitaScelta;
console.log(totale);
console.log(`Hai scelto un ${nomeProdotto}, la quantità è ${quantitaScelta}, per un totale: ${totale}.`)
//*--------------esercizio3-----------
let menuAperto = false;
console.log('aperto');
menuAperto = true;
console.log(menuAperto);
//*--------------esercizio4----------
let nome ;
const numero = null;
console.log(nome)
console.log(typeof nome);
console.log(numero)
console.log(typeof numero); /* undefined = non ho ancora assegnato un valore
null = indico intenzionalmente che non c’è un valore
let = posso riassegnare un valore in seguito
const = non posso riassegnare il valore in seguito*/
//*----------------esercizio1--------
const paginaPubblicata = false;
if (paginaPubblicata === true) {
    console.log('Pagina pubblicata con successo');
} else {
    console.log('Caricamento non riuscito');
}
//*----------------esercizio2--------
const eta = 19;
if (eta >= 18) {
    console.log('Accesso consentito');
} else {
    console.log('Accesso negato');
}
//*----------------esercizio3----------
const articoliCarrello = 2;
if (articoliCarrello === 0) {
    console.log('Carrello vuoto');
} else if (articoliCarrello === 1) {
    console.log('Un articolo presente nel carrello');
} else {
    console.log(`Hai ${articoliCarrello} articoli nel carrello`);
}
//*---------------esercizio4-----------
const totaleAcquisto = 45;
if (totaleAcquisto >= 100) {
    console.log('Sconto del 20%');
} else if (totaleAcquisto < 50 ) {
    console.log('Nessuno sconto');
} else {
    console.log('Sconto del 10%');
}
