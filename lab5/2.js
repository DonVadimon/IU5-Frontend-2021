/**
 * @param {Function} func
 * Напишите функцию curry(f),
 * входные данные - функция
 * выходные данные - функция, или результат если количество аргументов достаточно
 * Примеры:
 * function add(a, b, c) {
 *  return a + b + c;
 * }
 *
 * console.log(curry(add)(1)(2)(3)); //6
 * console.log(curry(add)(1)(2, 3)); //6
 * console.log(curry(add)(1, 2, 3)); //6
 */
const curry = (func) => (...params) => {
  if (func.length > params.length) {
    const f = func.bind(null, ...params);
    return curry(f);
  }
  return func(...params);
};

module.exports = curry;
