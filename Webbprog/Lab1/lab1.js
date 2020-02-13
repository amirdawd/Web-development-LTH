"use strict";
const imported = require("./inventory.js");
//Assignment 4
let foundation = []
let protein = []
let extras = []
let dressing = []
for(let x in imported.inventory){
    if(imported.inventory[x].foundation=== true){
        foundation.push()
    }
    if(imported.inventory[x].protein=== true){
        protein.push(x)
    }
    if(imported.inventory[x].extra=== true){
        extras.push(x)
    }
    if(imported.inventory[x].dressing=== true){
        dressing.push(x)
    }
}
console.log("Foundation: " + foundation);
console.log("\n");
console.log("Protein: " + protein);
console.log("\n");
console.log("Extras: " + extras);
console.log("\n");
console.log("Dressing: " + dressing);


class Salad{
    constructor() {
    this.Salad = {
      foundation: [],
      protein: [],
      extras: [],
      dressing: []
    }
    }
    addFoundation(foundations){
        this.Salad.foundation.push(foundations);
     
    }
    addProtein(proteins){
        this.Salad.protein.push(proteins);
     
    }
    addExtras(extra){
        this.Salad.extras.push(extra);
    }
    addDressing(dressings){
        this.Salad.dressing.push(dressings);
  }
    remove(value){
        if(value === foundation){
            var index = foundation.indexOf(value);
            foundation.slice(index,1)
        }
        if(typeof value === protein){
            var index = protein.indexOf(value);
            protein.slice(index,1)
        }
        if(typeof value === extras){
            var index = extras.indexOf(value);
            extras.slice(index,1)
        }
        if(typeof value === dressing){
            var index = dressing.indexOf(value);
            dressing.slice(index,1)
        }
    }
    getPrice(){
        console.log("Hhhh" + foundation[0].price)
    }
}
let myCaesarSalad = new Salad();

myCaesarSalad.addFoundation(imported.inventory.Salad);
myCaesarSalad.addProtein((protein[protein.indexOf('Kycklingfilé')]));
myCaesarSalad.addExtras((extras[extras.indexOf('Krutonger')]));
myCaesarSalad.addExtras((extras[extras.indexOf('Parmesan')]));
myCaesarSalad.addExtras((extras[extras.indexOf('Tomat')]));
myCaesarSalad.addDressing((dressing[dressing.indexOf('Ceasardressing')]));

myCaesarSalad.remove('foundation');
myCaesarSalad.getPrice();




