var data = {
    firstName: 'Tim',
    lastName: 'Long',
    language: 'EN' 
}
console.log('BEFORE: ' + Object.keys(data).length)

Object.defineProperty(data, "year", {value: '2008'})
Object.defineProperty(data, "married", {value: 'yes'})
Object.defineProperty(data, "array1", {value: '"a", {value:"123"}'})

console.log('AFTER: ' + Object.keys(data).length)
console.log(Object.keys(data) + ': ' + data.married)
console.log(Object.keys(data) + ': ' + data.array1)
console.log(Object.getOwnPropertyNames(data))
