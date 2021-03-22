/**
 * @param {string} str
 * @returns {boolean}
 * Напишите функцию isPalindrome(str),
 * входные данные - строкa
 * выходные данные - boolean - является ли переданная строка палиндромом
 * Примеры:
 * "мир" -> false
 * "тот" -> true
 */
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

module.exports = isPalindrome;
