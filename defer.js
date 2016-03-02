/* jscs:disable maximumLineLength */
(function (root, factory) { 'use strict'; var deps = [
]; if (typeof define === 'function' && define.amd) { define(deps, function () { return factory.apply(root, [].slice.call(arguments)); }); } else if (typeof module === 'object' && module.exports) { for (var x = deps.length; x--;) { deps[x] = require(deps[x]); } module.exports = factory.apply(root, deps); }/* else { TODO: Default? } */}((typeof global === 'object' && global) || (typeof window === 'object' && window) || /* jshint -W040 */this/* jshint +W040 */,
/* jscs:enable maximumLineLength */

function () {
  'use strict';

  /**
   * Executes `callback` as early in the next event loop as possible.
   *
   * @param {function} callback
   *
   * @function defer
   */
  return (typeof process === 'object' && process.nextTick) ||
         (typeof setImmediate === 'function' && setImmediate) ||
         setTimeout;
}));
