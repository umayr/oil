'use strict';

var model = require('../models/menu');

module.exports = {
  sync: sync,
  drop: drop,
  insert: insert
};

/**
 * Creates table if its not existed.
 *
 * @param [isForced=false] if `true`, it drops the table and create a new one.
 * @returns {*|Promise}
 */
function sync(isForced) {
  isForced = isForced || false;

  return model.sync({force: isForced});
}

/**
 * Simply drops the table in context.
 *
 * @returns {*|Promise}
 */
function drop() {
  return model.drop();
}

/**
 * Loosely syncs the table with database then inserts a row in the table.
 *
 * @param obj contains values to be inserted in an object literal.
 * @returns {*|Promise}
 */
function insert(obj) {
  return sync().then(function () {
    return model.create({
      restaurantId: obj.restaurantId,
      type: obj.type,
      name: obj.name,
      description: obj.description
    });
  });
}
