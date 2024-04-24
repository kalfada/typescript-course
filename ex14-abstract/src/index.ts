// Abstract is a way to create a class that will never have an instance,
// it's just a structure for other classes to follow.
// We can use it also for structuring a function without implementing it

type Base = 'classic' | 'thick' | 'thin'

interface HasFormatter {
    format(): string
}

abstract class MenuItem implements HasFormatter {
    constructor(private title: string, private price: number) { }

    get details(): string {
        return `${this.title} - ${this.price}$`
    }

    abstract format(): string
}

class Pizza extends MenuItem {
    constructor(title: string, price: number) {
        super(title, price);
    }

    private base: Base = 'classic';
    private toppings: string[] = [];


    format(): string {
        let formatted = this.details + '\n'
        // base
        formatted += `pizza on a ${this.base} base `
        // toppings
        if (this.toppings.length > 0) {
            formatted += `with ${this.toppings.join(', ')}`
        } else {
            formatted += `without toppings`
        }

        return formatted + '.'
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

