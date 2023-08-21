let http = require('http');

var server = http.createServer(function (req, res) {
  res.write('<h1>server created sucessfully</h1>')
  res.end();
})
server.listen(2222)