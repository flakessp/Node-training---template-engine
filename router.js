var Profile = require('./profile');
var render = require('./render');

function home(request, response) {
//2. handle http route GET / and POST / i.e. Home
  if(request.url === '/') {
    response.writeHead(200, {'Content-type': 'text/html'});
    render.view('header', {}, response);
    render.view('search', {}, response);
    render.view('footer', {}, response);
    response.end();
  }
}

function user(request, response) {
  var username = request.url.replace("/", "");
  if(username.length > 0) {
    response.writeHead(200, {'Content-type': 'text/html'});
    render.view('header', {}, response);

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
      render.view('profile', values, response);
      render.view('footer', values, response);
      response.end();
    });

    studentProfile.on('error', function(error) {
      //show Error
      response.writeHead(200, {'Content-type': 'text/html'});
      render.view('error', {errorMessage: error.message}, response);
      render.view('search', {}, response);
      render.view('footer', {}, response);
      response.end();
    })
  }
}

module.exports.home = home;
module.exports.user = user;
