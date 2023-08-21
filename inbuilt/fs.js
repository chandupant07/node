let fs = require('fs');
// fs.writeFile('myText2.txt', 'this is file packages', function () {
//   console.log('file created')
// })

// fs.appendFile('mycode.txt', 'this is node package \n', function () {
//   console.log('file create sucessfully\n')
// })

// fs.readFile('mycode.txt', 'utf-8', function (err, data) {
//   if (err) throw err
//   console.log(data)
// })

// fs.readFile('db.json', 'utf-8', function (err, data) {
//   if (err) throw err
//   console.log(data)
// })

// fs.unlink('mycode.txt', function (err) {
//   if (err) throw err
//   console.log('file deleted')
// })

fs.rename('myText2.txt', 'myText.txt', function (err) {
  if (err) throw err;
  console.log('file rename sucessfully');
})