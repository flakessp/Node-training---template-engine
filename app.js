//1. create a web server


var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-type': 'text/plain'});
  setInterval(function(){
    response.write('This is before the end!\n');
  }, 1000);
  // response.end('Hello world\n');
}).listen(3000);

console.log('Server running!🍿');


//2. handle http route GET / and POST / i.e. Home

//3 Handle http route get /:username i.e. .sergeipanfilov

//4 Function that handles the reading of files and merge in values
