'use strict';

var firstp = first();

var secondp = firstp.then((val) => second(val));

secondp.then(console.log);
