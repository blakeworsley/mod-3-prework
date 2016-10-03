'use strict';

const _ = require('lodash');

let worker = function (userList) {
  let countedComments = [];
  const comments = _.groupBy(userList, "username");

  _.forEach(comments, function (item, name) {

      countedComments.push({
          username: name,
          comment_count: _.size(item)
      });
  });

  return _.sortBy(countedComments, "comment_count").reverse();
};

module.exports = worker;
