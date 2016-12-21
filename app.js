var router = require('./router');
// create a web server
var http = require('http');

http.createServer(function(request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);

console.log('Server running!🍿');




// Handle http route get /:username i.e. .sergeipanfilov

// Function that handles the reading of files and merge in values
