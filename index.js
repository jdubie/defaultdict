/*!
 * set
 * Jack Dubie
 */

var _ = require('underscore');

/**
 * Expose `DefaultDict`.
 */

exports = module.exports = DefaultDict;

/**
 * Setup defaults with a `defaultValue`
 *
 * @example
 *   var dict = new DefaultDict(function() { return []; });
 * 
 * @param {function} defaultValue
 * @api public
 */

function DefaultDict(defaultValue) {
  this.defaultValue = function () {
    return _.clone(defaultValue);
  }
  this._ = {};
}

/**
 * Set `key` to `value`
 *
 * @param {*} key
 * @param {*} value
 * @api public
 */

DefaultDict.prototype.set = function(key, value) {
  this._[key] = value;
}

/**
 * Get `value` for `key` if defined. Otherwise return default
 *
 * @param {*} key
 * @return {*}
 * @api public
 */

DefaultDict.prototype.get = function(key, value) {
  var result = this._[key];
  if (typeof result !== 'undefined') return result;

  // set this value and recurse
  this.set(key, this.defaultValue());
  return this.get(key);
}
