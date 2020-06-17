var fs = require('fs')
//console.log(fs)
//console.log('hi')


var data = [{
    firstName: 'Dan',
    LastName: 'Fuji',
    Age: '55'
},
{
    firstName: 'Mary',
    LastName: 'Smith',
    Age: '45'
},
{
    firstName: 'Terry',
    LastName: 'Bond',
    Age: '21'
}
]

location = [{
    Street: '109 emerson cir',
    State: 'Tennessee',
    Zip: 38332,
    Status: true
}, {
    Street: '5000 Main st',
    State: 'Washington',
    Zip: 93330,
    Status: false
}, {
    Street: '1000 Bend Ave',
    State: 'Kentucky',
    Zip: 65563,
    Status: true
}]

let JsonData =JSON.stringify(data)
console.log(JsonData)

let resident = JSON.stringify(location)
console.log(resident)

let result=[]
result.push(JsonData)
result.push(resident)

console.log(result)

fs.writeFileSync('WriteMe.js', result.toString(), 'utf8')
