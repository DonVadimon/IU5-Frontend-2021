const curry = require('../lab5/2.js');
const customBind = require('../lab5/3.js');
const memoize = require('../lab5/4.js');
const makeRoute = require('../lab5/5.js');
require('../lab5/1.js');


test('MyMap 1', () => {
    expect([1, 2, 3].myMap(x => x * 2)).toEqual([2, 4, 6]);
});
test('MyMap 2', () => {
    expect([1, 2, 3].myMap(x => x * 3)).toEqual([3, 6, 9]);
});
test('MyMap 2', () => {
    expect([].myMap(x => x * 3)).toEqual([]);
});


function add(a, b, c) {
    return a + b + c;
}

test('curry 1', () => {
    expect(curry(add)(1)(2)(3)).toBe(6);
});
test('curry 2', () => {
    expect(curry(add)(1)(2, 3)).toBe(6);
});
test('curry 3', () => {
    expect(curry(add)(1, 2, 3)).toBe(6);
});

function add3(a) {
    return a + this.b;
}

test('customBind 1', () => {
    expect(customBind(add3, { b: 2 })(1)).toBe(3);
});

function add2(a) {
    return a * 2;
}
const memozedAdd = memoize(add2);

test('memoize 1', () => {
    expect(memozedAdd(1)).toEqual({ cache: false, result: 2 });
});
test('memoize 2', () => {
    expect(memozedAdd(1)).toEqual({ cache: true, result: 2 });
});
test('memoize 3', () => {
    expect(memozedAdd(2)).toEqual({ cache: false, result: 4 });
});
test('memoize 4', () => {
    expect(memozedAdd(1)).toEqual({ cache: false, result: 2 });
});
test('memoize 5', () => {
    expect(memozedAdd(2)).toEqual({ cache: false, result: 4 });
});
test('memoize 6', () => {
    expect(memozedAdd(2)).toEqual({ cache: true, result: 4 });
});


test('makeRoute', () => {
    expect(makeRoute([
        { from: 'L', to: 'M' },
        { from: 'M', to: 'N' },
        { from: 'A', to: 'L' },
        { from: 'B', to: 'A' },
        { from: 'N', to: 'Z' },
    ])).toEqual(
        [
            { from: "B", to: "A" },
            { from: "A", to: "L" },
            { from: "L", to: "M" },
            { from: "M", to: "N" },
            { from: "N", to: "Z" }
        ]
    );
});