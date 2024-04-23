// We can add access modifiers to block direct access to
// properties.

type Base = 'classic' | 'thick' | 'thin'

class Pizza {
    // ----- SHORT WAY -----
    constructor(private title: string, private price: number) { }
    // ----- LONG WAY -----
    // constructor(title: string, price: number) {
    //     this.title = title;
    //     this.price = price;
    // }
    // private title: string;
    // private price: number;
    private base: Base = 'classic';
    private toppings: string[] = [];

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

