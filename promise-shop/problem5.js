'use strict';

var promise = new Promise(function(fulfill, reject) {
  fulfill('PROMISE VALUE');
  fulfill(main());
});

function main() {
  console.log('MAIN PROGRAM');
}

promise.then(console.log);
