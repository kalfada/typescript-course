// type 'any' declare that the variable/function can get any type and can also be changed to any type

let id: any = 10
id = '10'

function add(num1: any, num2: any): any {
    return num1 + num2
}

console.log(add('daniel ', 'kalfa'));
console.log(add(20, 10));
