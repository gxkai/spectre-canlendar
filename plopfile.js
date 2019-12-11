const appointGenerator = require('./plop-templates/prompt');

module.exports = function(plop) {
  plop.setGenerator('appoint', appointGenerator);
};
