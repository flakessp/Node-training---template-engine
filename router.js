var Profile = require('./profile');

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
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.write('Header\n');

    var studentProfile = new Profile(username);

    studentProfile.on('end', function(profileJSON){
      //show profile

      //store the values we need
      var values = {
        avatarUrl: profileJSON.gravatar_url,
        userName: profileJSON.profile_name,
        badges: profileJSON.badges.length,
        javascriptPoints: profileJSON.points.JavaScript
      }
      // simpleResponse
      response.write(values.avatarUrl + '\n');
      response.write(values.userName + '\n');
      response.write(values.badges + '\n');
      response.write(values.javascriptPoints + '\n');
      response.end('Footer\n');
    });

    studentProfile.on('error', function(error) {
      //show Error
      response.write(error.message + '\n');
      response.end('Footer\n');
    })
  }
}

module.exports.home = home;
module.exports.user = user;
