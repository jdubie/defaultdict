/*!
 * set
 * Jack Dubie
 */

/**
 * Expose `DefaultDict`.
 */

exports = module.exports = DefaultDict;

/**
 * Setup defaults with a `defaultValue`
 *
 * @param {*} defaultValue
 * @api public
 */

function DefaultDict(defaultValue) {
  this.defaultValue = defaultValue;
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
  if (result) return result;
  return this.defaultValue;
}
