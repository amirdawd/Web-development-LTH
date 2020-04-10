//import inventory from './inventory.ES6';
//import { Component } from 'react';

class Salad {
    constructor() {
        this.foundation = [];
        this.protein = [];
        this.extra = [];
        this.dressing = [];
    }

    addFoundation(found) {
            this.foundation.push(found);
    }
    addProtein(proteins) {
            this.protein.push(proteins);
    }
    addExtras(extras) {
            this.extra.push(extras);
    }
    addDressing(dressings) {
            this.dressing.push(dressings);
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
    
    price(inventory) {
        const reducer = (prev, item) => {
            if(inventory[item]){
                return prev + inventory[item].price;
            }
            return 0;

    } 
        let priceFoundation = this.foundation.reduce(reducer, 0) ;
        let priceExtra = this.extra.reduce(reducer, 0);
        let priceProtein = this.protein.reduce(reducer, 0);
        let priceDressing = this.dressing.reduce(reducer, 0);
        let totalPrice = priceDressing + priceExtra + priceFoundation + priceProtein;
        return totalPrice;
    }
}
export default Salad;




