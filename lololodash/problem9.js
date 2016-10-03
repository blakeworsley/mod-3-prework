'use strict';

const _ = require('lodash');

const worker = (input) => {
  var mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

  return _.template(mytemplate)(input);  
};

module.exports = worker;
