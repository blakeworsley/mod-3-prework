'use strict';

const _ = require('lodash');

let worker = (cities) => {
    return _.forEach(cities, (city) => {
        if (city.population > 1) city.size = 'big';
        else if (city.population >= 0.5) city.size = 'med';
        else city.size = 'small';
    });
};

module.exports = worker;
