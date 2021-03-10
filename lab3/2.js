/**
 * @param {string} str
 * Напишите функцию getMinMax(str),
 * на вход в функцию подается строка str
 * числа в строке выделяются пробелами или знаками препинания
 * необходимо найти минимальное и максимальное число в строке
 * вернуть в формате {min: 1, max: 22}
 * Примеры:
 * '4 и -6, 2, 1, может 9, 63, -134 и 566]' -> {min: -134, max: 566}
 */
function getMinMax(str) {
  const nums = str.replace(/\D+ | . | -/gi, ' ').split(' ').map((subStr) => (subStr.includes('.') ? parseFloat(subStr) : parseInt(subStr, 10)));
  return {
    min: Math.min(...nums),
    max: Math.max(...nums),
  };
}

module.exports = getMinMax;
