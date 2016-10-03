var promise = Promise.resolve('SECRET VALUE');

var promise = Promise.reject(new Error ('SECRET VALUE'));

promise.catch(function (error) {
  console.error('THERE IS AN ERROR!!!');
  console.error(error.message);
});
