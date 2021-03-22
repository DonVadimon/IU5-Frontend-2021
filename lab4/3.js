/**
 * @param {string} value
 * @returns {string}
 * Напишите функцию rle(str),
 * входные данные - строка
 * выходные данные - строка со свернутыми диапазонами
 * Примеры:
 * rle('AAAB') === 'A3B'
 * rle('BCCADDEEEBB') === 'BC2AD2E3B2'
 */

function rle(value) {
  return (value.match(/(.)\1*/g) || []).map((el) => el.charAt(0) + (el.length - 1 ? `${el.length}` : '')).join('');
}

module.exports = rle;
