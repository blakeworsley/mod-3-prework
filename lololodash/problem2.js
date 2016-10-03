
var _ = require("lodash");

var worker = function(arg) {
    return _.sortBy(arg, 'quantity').reverse();
};

module.exports = worker;
