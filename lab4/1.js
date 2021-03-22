/**
 * @param {[string]} arr
 * @returns {[[string]]}
 * Напишите функцию getAnagramms(arr),
 * входные данные - массив строк
 * выходные данные - массив элементов, где каждый элемент является массивом анаграмм (строки)
 * Примеры:
 * ['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп']; ->
 * [["мир", "Рим", "мри"], ["сирота", "Ариост"], ["пва", "авп"]]
 */
function getAnagramms(arr) {
  return arr.reduce((accum, el) => accum.concat({ initial: el, converted: el.toLowerCase().split('').sort().join('') }), [])
    .sort((a, b) => a.converted.localeCompare(b.converted))
    .reduce((accum, el) => {
      if ((accum.slice(-1).pop().slice(-1).pop() || {}).converted === el.converted) {
        accum[accum.length - 1].push(el);
      } else {
        accum.push([el]);
      }
      return accum;
    }, [[]]).slice(1)
    .map((el) => el.map(({ initial }) => initial))
    .sort((a, b) => b.length - a.length);
}

module.exports = getAnagramms;
