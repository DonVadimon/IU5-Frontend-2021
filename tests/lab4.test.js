const getAnagramms = require('../lab4/1.js');
const isPalindrome = require('../lab4/2.js');
const rle = require('../lab4/3.js');
const get1DArray = require('../lab4/4.js');
const checkBrackets = require('../lab4/5.js');

test('getAnagramms 1', () => {
  expect(getAnagramms(['мир', 'Рим'])).toEqual([
    ['мир', 'Рим'],
  ]);
});
test('getAnagramms 2', () => {
  expect(getAnagramms(['мир', 'Рим', 'сирота', 'Ариост', 'мри', 'пва', 'лор', 'авп'])).toEqual([
    ['мир', 'Рим', 'мри'],
    ['пва', 'авп'],
    ['сирота', 'Ариост'],
    ['лор'],
  ]);
});
test('getAnagramms 3', () => {
  expect(getAnagramms([])).toEqual([]);
});
test('getAnagramms 4', () => {
  expect(getAnagramms(['мир', '222'])).toEqual([
    ['222'],
    ['мир'],
  ]);
});

test('isPalindrome 1', () => {
  expect(isPalindrome('мир')).toBe(false);
});
test('isPalindrome 2', () => {
  expect(isPalindrome('acddwa')).toBe(false);
});
test('isPalindrome 3', () => {
  expect(isPalindrome('awddwa')).toBe(true);
});
test('isPalindrome 4', () => {
  expect(isPalindrome('a')).toBe(true);
});

test('rle 1', () => {
  expect(rle('AAAB')).toBe('A3B');
});
test('rle 2', () => {
  expect(rle('BCCADDEEEBB')).toBe('BC2AD2E3B2');
});
test('rle 3', () => {
  expect(rle('')).toBe('');
});

test('get1DArray 1', () => {
  expect(get1DArray([1, 2, 'aa', [1, 2, 3],
    [
      [1, 2],
      [1, 2],
    ],
    [
      [
        [1, 2, [1, 2, [2]]], 3,
      ], 4,
    ],
  ])).toEqual([1, 2, 'aa', 1, 2, 3, 1, 2, 1, 2, 1, 2, 1, 2, 2, 3, 4]);
});
test('get1DArray 2', () => {
  expect(get1DArray([])).toEqual([]);
});

test('checkBrackets 1', () => {
  expect(checkBrackets('[(<>)]')).toBe(true);
});
test('checkBrackets 2', () => {
  expect(checkBrackets('([)]()<>')).toBe(false);
});
test('checkBrackets 3', () => {
  expect(checkBrackets('[[()]]([])<>')).toBe(true);
});
test('checkBrackets 4', () => {
  expect(checkBrackets('[]')).toBe(true);
});
test('checkBrackets 5', () => {
  expect(checkBrackets('')).toBe(true);
});
