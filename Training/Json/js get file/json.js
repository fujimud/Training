/*
{
    "employees":[
      {"firstName":"John", "lastName":"Doe"},
      {"firstName":"Anna", "lastName":"Smith"},
      {"firstName":"Peter", "lastName":"Jones"}
    ]
}
*/
/*
// parsing from a JSON file into a Javascript array, not a Javascript object
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
var obj = JSON.parse(text)
console.log(obj.employees[0].lastName)
console.log(obj.employees[1].lastName) 
console.log(obj.employees[2].lastName)
*/
////////////////////////////////////////////////////////////////////////
// javascript object:
/*
var jstext = {firstName: "john", lastName:"Doe", age:30}
console.log(jstext.firstName)

jstext.year = "2020"        // add new content
console.log(jstext)
jstext.firstName = "Sam"    // modify an object
console.log(jstext)
delete jstext.age           // delete an object
console.log(jstext)
*/
////////////////////////////////////////////////////////////////////////
// javascript array:

var jsarray = [{firstName: "Sam", lastName: "long", age: "30"},
                {firstName: "Betty", lastName: "Short", age: "21"},
                {firstName: "Rich", lastName: "Davis", age: "45"},
]

//console.log(jsarray)
//console.log(jsarray[0].firstName)
//console.log(jsarray[2].firstName)
//console.log(jsarray[2].year = 2020)  // add 
//console.log(jsarray)
let name = "Fred"
let last = "Tory"
let age = 65 
let data = {firstName: name, lastName: last, age: age}
//let data= {firstName: "John", lastName: "Fuji", age: 40}
jsarray.push(data)
console.log(jsarray)
console.log(jsarray[3].lastName)



