type Rgb = [number, number, number]

const rgb: Rgb = [255, 0, 0]

function printRgb(rgb: Rgb): void {
    console.log(rgb)
}

function getRandomRgb(): Rgb {
    return [Math.floor(Math.random() * 255), Math.floor(Math.random() * 255), Math.floor(Math.random() * 255)]
}

printRgb(rgb)
console.log(getRandomRgb());


// objects with type alias

type User = {
    name: string
    age: number
}

const userOne = {
    name: 'John',
    age: 30
}