var eta = parseInt(prompt('inserisci la tua età'));
var km = parseInt(prompt('Inserisci i km che vuoi percorrere'));
var prezzo = 0.21;
var comunicazione;
var sconto = 0;
var totale;

if (eta < 18) {
    sconto = 20;
} else if (eta>65) {
    sconto = 40;
}
prezzo -= 0.21 * sconto / 100;
if (sconto = 0) {
    comunicazione = 'avendo ' + eta + ' anni, non hai diritto ad alcuno sconto, il tuo prezzo è ' + prezzo;
    } else {
        comunicazione = 'avendo ' + eta + ' anni, ti è stato applicato uno sconto del ' + sconto + '%, il tuo prezzo è ' + prezzo;
    }  
totale = prezzo * km;

document.getElementById('comunicazione').innerHTML = comunicazione;
document.getElementById('km').innerHTML = km + ' km *';
document.getElementById('prezzo').innerHTML = prezzo + ' €/km =';
document.getElementById('totale').innerHTML = totale + '€ di spesa per il viaggio';