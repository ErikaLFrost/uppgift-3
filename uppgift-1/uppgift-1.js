/* Konstruktor för att få enhetlig information om varje objekt som skapas under den */
function Person(namn, epost, mobil, gatuadress, postnr, ort){
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    /* Skapar ett nästlat objekt för att ha alla adress-egenskaper samlade och strukturerade på ett ställe */
    this.adress = {
        gatuadress: gatuadress,
        postnr: postnr,
        ort: ort,
    }

    /* Skapar en funktion som formaterar utskriften av objekten på ett tydligt sätt */
    this.print = function(){
        console.log(`
        ${this.namn} 

        ${this.adress.gatuadress}  
        ${this.adress.postnr}  ${this.adress.ort}`);
    }   
}

let erika = new Person("Erika Loman Frost", "erika.loman@gmail.com", "0706838465", "Eksoppsvägen 35", "756 46", "Uppsala");
let sima = new Person("Sima Frost", "sima@gmail.com", "0701234567", "Eksoppsvägen 35", "756 46", "Uppsala");

erika.print();
sima.print();

