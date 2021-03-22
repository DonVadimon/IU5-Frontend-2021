/**
 * @param {string} str
 * @returns {boolean}
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию checkBrackets(str),
 * на вход подается строка состоящая из скобок разной вложенности, варианты скобок: []<>()
 * необходимо определеить, правильно ли они вложены
 * Примеры:
 * [[]]()<> --> true
 * ([)]()<> --> false
 * [(<>)] --> true
 */

function checkBrackets(str) {
  const stack = [];
  const BRACKETS = '[]<>()';
  return [...str].every((bracket) => (BRACKETS.indexOf(bracket) % 2
    ? stack.pop() === BRACKETS.charAt(BRACKETS.indexOf(bracket) - 1)
    : stack.push(bracket))) && stack.length === 0;
}

module.exports = checkBrackets;
