// class with interface
// We can add an interface that the class will implement

type Base = 'classic' | 'thick' | 'thin'

interface HasFormatter {
    format(): string
}

class Pizza implements HasFormatter {
    constructor(private title: string, private price: number) { }

    private base: Base = 'classic';
    private toppings: string[] = [];

    format(): string {
        return `${this.title} with a ${this.base} base`
    }

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
console.log(pizza.format());

