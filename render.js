var fs = require('fs');
// Function that handles the reading of files and merge in values
function view(templateName, values, response) {
  //read from template files
  var fileContents = fs.readFileSync('./views/' + templateName + '.html');

  response.write(fileContents);
}

module.exports.view = view;
