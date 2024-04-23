"use strict";
// We can add access modifiers to block direct access to
// properties.
class Pizza {
    // ----- SHORT WAY -----
    constructor(title, price) {
        this.title = title;
        this.price = price;
        // ----- LONG WAY -----
        // constructor(title: string, price: number) {
        //     this.title = title;
        //     this.price = price;
        // }
        // private title: string;
        // private price: number;
        this.base = 'classic';
        this.toppings = [];
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }
    changeBase(base) {
        this.base = base;
    }
}
const pizza = new Pizza('Margarita', 100);
pizza.addTopping('mushrooms');
pizza.addTopping('cheese');
pizza.removeTopping('cheese');
pizza.changeBase('thick');
console.log(pizza);
