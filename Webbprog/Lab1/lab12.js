"use strict"
const imported = require("./inventory.js");
let foundations = Object.keys(imported.inventory).filter(function (element) {
    return imported.inventory[element].foundation;
})
let proteins = Object.keys(imported.inventory).filter(function (element) {
    return imported.inventory[element].protein;
})
let extras = Object.keys(imported.inventory).filter(function (element) {
    return imported.inventory[element].extra;
})
let dressings = Object.keys(imported.inventory).filter(function (element) {
    return imported.inventory[element].dressing;
})
console.log("Foundation: " + foundations);
console.log("\n");
console.log("Protein: " + proteins);
console.log("\n");
console.log("Extras: " + extras);
console.log("\n");
console.log("Dressing: " + dressings);

class Salad {
    constructor() {
        this.foundation = [];
        this.protein = [];
        this.extra = [];
        this.dressing = [];
    }

    addFoundation(foundations) {
        foundations.forEach(item => {
            this.foundation.push(item);
        });
    }
    addProtein(proteins) {
        proteins.forEach(item => {
            this.protein.push(item);
        });
    }
    addExtras(extras) {
        extras.forEach(item => {
            this.extra.push(item);
        });
    }
    addDressing(dressings) {
        dressings.forEach(item => {
            this.dressing.push(item);
        });
    }
    remove(type, value) {

        if (type === 'foundation') {
            let index = this.foundation.indexOf(value);
            if (index === -1) {
                console.log("Object not found  " + this.foundation[0] +  "  End");
            }
            else {
                this.foundation.splice(index, 1);
            }
        }
        if (type === 'protein') {
            let index = this.protein.indexOf(value);
            if (index === -1) {
                console.log("Object not found");
            }
            else {
                this.protein.splice(index, 1);
                console.log("Log: " + index + ":: " + this.protein);
            }

        }
        if (type === 'extra') {
            let index = this.extra.indexOf(value);
            if (index === -1) {
                console.log("Object not found");
            }
            else {
                this.extra.splice(index, 1);
            }
        }
        if (type === 'dressing') {
            let index = this.dressing.indexOf(value);
            if (index === -1) {
                console.log("Object not found");
            }
            else {
                this.dressing.splice(index, 1);
            }
        }
    }
    
    /* allIngredients: put all the 4 arrays with all ingredients in one big array.
       allIngredientPrices: put all the precis for the ingredients togheter.
       totalPrice: calculate the total price for a precific salad
*/
/*
    price() {
        let allIngredients = this.foundation.concat(this.extra, this.protein, this.dressing);
        let allIngredientPrices = Object.values(allIngredients).reduce((prev, item) => {
            return prev.concat(item);
        }, []);
        let totalPrice = allIngredientPrices.reduce((prev, item) => {
            return prev + item.price;
        }, 0);

        console.log("Total price for a normal salad: " + totalPrice);
    }*/ 
    price() {
        const reducer = (prev, item) => prev + imported.inventory[item].price;
        let priceFoundation = this.foundation.reduce(reducer, 0) ;
        let priceExtra = this.extra.reduce(reducer, 0);
        let priceProtein = this.protein.reduce(reducer, 0);
        let priceDressing = this.dressing.reduce(reducer, 0);
        let totalPrice = priceDressing + priceExtra + priceFoundation + priceProtein;
        return totalPrice;
    }
}

let myCesarSalad = new Salad();
myCesarSalad.addFoundation(['Salad']);
myCesarSalad.addProtein(['Kycklingfilé']);
myCesarSalad.addExtras(['Krutonger']);
myCesarSalad.addExtras(['Parmesan']);
myCesarSalad.addDressing(['Ceasardressing']);
myCesarSalad.remove('foundation', 'Salad');
console.log("\n");
myCesarSalad.price();
//myCesarSalad.remove('foundation','Salad');
console.log(myCesarSalad);

class ExtraGreenSalad extends Salad {
    constructor() {
        super();
    }
    price() {
        const reducer = (prev, item) => prev + imported.inventory[item].price;
        let priceFoundation = this.foundation.reduce(reducer, 0) * 1.3;
        let priceExtra = this.extra.reduce(reducer, 0) * 0.5;
        let priceProtein = this.protein.reduce(reducer, 0) * 0.5;
        let priceDressing = this.dressing.reduce(reducer, 0) * 0.5;
        let totalPrice = priceDressing + priceExtra + priceFoundation + priceProtein;
        return totalPrice;
    }
}

let mySalad = new ExtraGreenSalad();
mySalad.addFoundation(["Salad"]);
mySalad.addProtein(['Kycklingfilé']);
mySalad.addExtras(['Krutonger', 'Parmesan']);
mySalad.addExtras(['Avocado']);
mySalad.addDressing(['Ceasardressing']);
console.log("Total price for a ExtraGreenSlad:" + " " + mySalad.price());
console.log(mySalad);

/*Uppgift 9, the prototype chain :
You have to run the objects in the ptotoyp chain untill you archive null as the end of the chain.
  let mySalad = new ExtraGreenSalad();
  console.log(mySalad);
  console.log(Object.getPrototypeOf(mySalad));
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(mySalad)));
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(mySalad))));
  console.log(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(Object.getPrototypeOf(mySalad)))));
 */


class GourmentSalad extends Salad {
    constructor() {
        super();
        this.foundationPrice = [];
        this.proteinPrice = [];
        this.extraPrice = [];
        this.dressingPrice = [];

    }
    addFoundation(foundations, size = 1) {
        foundations.forEach(item => {
            this.foundationPrice.push({ name: item, size: size })
        });
    }
    addProtein(proteins, size = 1) {
        proteins.forEach(item => {
            this.proteinPrice.push({ name: item, size: size })
        });
    }
    addExtras(extras, size = 1) {
        extras.forEach(item => {
            this.extraPrice.push({ name: item, size: size })
        });
    }
    addDressing(dressings, size = 1) {
        dressings.forEach(item => {
            this.dressingPrice.push({ name: item, size: size })
        });
    }
    remove(type) {

        if (type === 'foundation') {
            this.foundationPrice.pop();
        }
        if (type === 'protein') {
                this.protein.pop();

        }
        if (type === 'extra') {
            this.extraPrice.pop();
        }
        if (type === 'dressing') {
            this.dressingPrice.pop();
        }
    }
    
    price() {
        const reducer = (prev, item) => prev + (imported.inventory[item.name].price * item.size);
        let priceFoundation = this.foundationPrice.reduce(reducer, 0);
        let priceExtra = this.extraPrice.reduce(reducer, 0);
        let priceProtein = this.proteinPrice.reduce(reducer, 0);
        let priceDressing = this.dressingPrice.reduce(reducer, 0);

        let totalPrice = priceDressing + priceExtra + priceFoundation + priceProtein;

        console.log("Total price for a fancy salad: " + totalPrice);
    }
}

let fancySalad = new GourmentSalad();
fancySalad.addFoundation(['Salad'], 1.3);
fancySalad.addProtein(['Kycklingfilé'], 0.5);
fancySalad.addExtras(['Avocado'], 0.5);
fancySalad.addExtras(['Parmesan'], 0.5);
fancySalad.addDressing(['Kimchimayo'], 0.5);
fancySalad.remove('foundation');
console.log(Object.keys(fancySalad));

fancySalad.price();

/* Shoping Cart

class shopingCart{
    constructor(){
        this.cart = [];
    }

    removeFromCart(sallad){

    }
    calculatePrice(){

    }
}
let shopCart = new shopingCart();
shopCart.addToCart(myCesarSalad);
console.log(shopCart)
*/