function Person(namn, epost, mobil, gatuadress, postnr, ort){
    this.namn = namn;
    this.epost = epost;
    this.mobil = mobil;
    this.adress = {
        gatuadress: gatuadress,
        postnr: postnr,
        ort: ort,
    }
    this.print = function(){
        console.log(`
        ${this.namn} 

        ${this.adress.gatuadress}  
        ${this.adress.postnr}  ${this.adress.ort}`);
    }   
}
let erika = new Person("Erika Loman Frost", "erika.loman@gmail.com", "0706838465", "Eksoppsvägen 35", "756 46", "Uppsala",);
let sima = new Person("Sima Frost", "sima@gmail.com", "0701234567", "Eksoppsvägen 35", "756 46", "Uppsala");

erika.print();
sima.print();

