/**
 * @param {Function} f
 * Напишите функцию polyfill map reduce,
 * написать полифил на функцию map через reduce
 * что такое полифил нужно почитать в гугле
 * Примеры:
 * [1,2,3].myMap((x) => x*2) -> [2,4,6]
 * Нужно назвать myMap !!!!!
 */

// eslint-disable-next-line no-extend-native
Array.prototype.myMap = function myMap(f) {
  return this.reduce((accum, el) => accum.concat(f(el)), []);
};