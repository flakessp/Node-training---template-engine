function home(request, response) {
//2. handle http route GET / and POST / i.e. Home
  if(request.url === '/') {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Header\n');
    response.write('Search\n');
    response.end('Footer\n');
  }
}

function user(request, response) {
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.write('Header\n');
    response.write(username + '\n');
    response.end('Footer\n');
  }
}

module.exports.home = home;
module.exports.user = user;
