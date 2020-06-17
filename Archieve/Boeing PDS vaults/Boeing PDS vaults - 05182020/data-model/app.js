var fs = require('fs');
//synchronous process
//var readMe = fs.readFileSync('TestFile.txt', 'utf8')       // read the whole file before proceding in the code
//fs.writeFileSync('writeMe.txt', readMe);


// asynchronous process - while reading the file, the code will continue to be precessed
fs.readFile('TestFile.txt', 'utf8', function(err,data) {

  // fs.writeFile('writeMe.txt', data)
  //    console.log(data)
   //})
   fs.writeFile('writeMe.txt', data, 'utf8', (err) => {
      console.log('Writing: ' + data)
   })
})



console.log('test')



