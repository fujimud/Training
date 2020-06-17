const fs = require('fs');     // require() lives on the server side. It working because Terminal behavies like a server

var data = [{"first": "New set of information being added"},
            {"second": "second line of code"},
            {"third": "third line of code"}
         ]

//synchronous process
//var readMe = fs.readFileSync('TestFile.txt', 'utf8')       // read the whole file before proceding in the code
//fs.writeFileSync('writeMe.txt', readMe);

// asynchronous process - while reading the file, the code will continue to be precessed
/*
fs.readFile('test.txt', 'utf8', function(err,data) {
  // fs.writeFile('writeMe.txt', data)
  //    console.log(data)
   //})
   fs.writeFile('writeMe.txt', data, 'utf8', (err) => {
      console.log(data)
   })
})
console.log('test')
*/

// writeFile a new message will over write any previous content
// writeFile can also create a new file, if one does not already exist
//let data = "Writing a new message"
//fs.writeFileSync('test.txt', data)

//fs.copyFileSync('test.txt', 'copyText.txt')

// delete a file by using unlink()
//fs.unlinkSync('copyText.txt')

let d = new Date()
//let year = d.getFullYear()
//let date = d.getDate();
//let month = d.getMonth();
//let hour = d.getHours();
//let min = d.getMinutes();
//let sec = d.getSeconds();
//console.log(min)

let date = (d.getDate() < 10) ? '0' + d.getDate() : d.getDate()
let month = (d.getMonth() < 10) ? '0' + d.getMonth() : d.getMonth()
let hour = (d.getHours() < 10) ? '0' + d.getHours() : d.getHours()
let min = (d.getMinutes() < 10) ? '0' + d.getMinutes() : d.getMinutes()
let sec = (d.getSeconds() < 10) ? '0' + d.getSeconds() : d.getSeconds()
if (month < 10) month = '0' + month;
if (hour < 10) hour = '0' + hour;
if (min < 10) min = '0' + min;
if (sec < 10) sec = '0' + sec;
console.log(date)

let currentDate = d.getFullYear() + month + date + hour + min + sec +'L'
//console.log(currentDate)

console.log("STARTING")
//console.log(fs.readFileSync('test.js', 'utf8'))
//fs.renameSync('test.js', currentDate + '_test.js')
//let output = 'var data = ' + JSON.stringify(data)
//fs.writeFileSync('test.js', output)


src= 'test.js';
console.log(data)
console.log(data[1])
//let jsTemp = JSON.parse(data);
//console.log(jsTemp)


