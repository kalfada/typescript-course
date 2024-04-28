import { Pizza, PizzaProps } from "./models/Pizza"

const form = document.querySelector('.create') as HTMLFormElement

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = new FormData(form)

    const newPizza: PizzaProps = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        toppings: data.getAll('toppings') as string[],
        price: parseInt(data.get('price') as string)
    }
    try {
        await Pizza.save(newPizza)
        window.location.href = '/'
    } catch (error) {
        console.log(error);
    }

})