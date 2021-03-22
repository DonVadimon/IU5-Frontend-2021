/**
 * @param {Array.<Object.<string, string>>} arr
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
  const set = new Set(arr.map(({ to }) => to));
  let entry = arr.filter(({ from }) => !set.has(from)).pop().from;
  const mapa = new Map(arr.map(({ from, to }) => [from, to]));
  // eslint-disable-next-line no-return-assign
  return arr.reduce((accum) => accum.concat({ from: entry, to: entry = mapa.get(entry) }), []);
}

module.exports = makeRoute;
