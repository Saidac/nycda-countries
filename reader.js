var fs = require('fs');

module.exports = {
  readFileSync: function(path) {
  return JSON.parse(fs.readFileSync(path));
  },

  readFile: function(path, callback) {
    fs.readFile(path, function(error, data) {
      var print = callback(error, JSON.parse(data));
    });
  }
};
