'use strict';

const _ = require('lodash');

let worker = (cities) => {
    let allCities = { hot: [], warm: []}

    _.forEach(cities, (city, cityName) =>{
      if(_.every(city, ((weather) => weather > 19))){
        allCities.hot.push(cityName);
      }
      else if(_.some(city, ((weather) => weather >= 19))){
        allCities.warm.push(cityName);
      }
    });
    return allCities;
};

module.exports = worker;
