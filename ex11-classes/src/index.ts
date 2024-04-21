type Base = 'classic' | 'thick' | 'thin'

class Pizza {
    constructor(title: string, price: number) {
        this.title = title;
        this.price = price;
    }
    title: string;
    price: number;
    base: Base = 'classic';
    toppings: string[] = [];

    addTopping(topping: string) {
        this.toppings.push(topping);
    }
    removeTopping(topping: string) {
        this.toppings = this.toppings.filter(t => t !== topping);
    }
    changeBase(base: Base) {
        this.base = base;
    }
}

const pizza = new Pizza('Margarita', 100);
pizza.addTopping('mushrooms');
pizza.addTopping('cheese');
pizza.removeTopping('cheese');
pizza.changeBase('thick');
console.log(pizza);

