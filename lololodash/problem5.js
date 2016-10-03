'use strict';

const _ = require('lodash');

let worker = function (words) {
  return _.chain(words)
    .map((item) => { return item + 'chained'; })
    .map((item) => { return item.toUpperCase(); })
    .sortBy()
    .value();
};

module.exports = worker;
