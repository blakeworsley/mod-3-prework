
var _ = require("lodash");

var worker = function(arg) {
    return _.filter(arg, {active: true});
};

module.exports = worker;
