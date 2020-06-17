function sum(a, b) {
    return a + b
}

let sum2 = (a, b) => a + b

console.log('sum: ' + sum(1, 4))
console.log('sum2: ' + sum2(2, 6))

//////////////////////////////////

function isPositive(number) {
    return number >= 0
}

let isPositive2 = (number) => number >= 0

console.log('isPosition: ' + isPositive(1))
console.log('isPosition2: ' + isPositive2(100))


//////////////////////////////////

function randomNumber() {
    return Math.random
}

let randomNumber2 = () => Math.random

console.log(randomNumber())
console.log(randomNumber2())

//////////////////////////////////
document.addEventListener('click1', function() {
    console.log('Click1')
})

document.addEventListener('click', () => console.log('Click2'))


//////////////////////////////////
class Person {
    constructor(name) {
        this.name = name
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name)
        })
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('function: ' + this.name)
        })
    }
}

let person = new Person('Bob')
person.printNameArrow()
person.printNameFunction()
console.log(this.name)