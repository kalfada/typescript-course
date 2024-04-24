"use strict";
// Abstract is a way to create a class that will never have an instance,
// it's just a structure for other classes to follow.
// We can use it also for structuring a function without implementing it
class MenuItem {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    get details() {
        return `${this.title} - ${this.price}$`;
    }
}
class Pizza extends MenuItem {
    constructor(title, price) {
        super(title, price);
        this.base = 'classic';
        this.toppings = [];
    }
    format() {
        let formatted = this.details + '\n';
        // base
        formatted += `pizza on a ${this.base} base `;
        // toppings
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(', ')}`;
        }
        else {
            formatted += `without toppings`;
        }
        return formatted + '.';
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
console.log(pizza.format());
