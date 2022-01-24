"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIMPLE_TYPE_VALUES_SET_STRINGS = exports.SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS = exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS = exports.SIMPLE_TYPE_VALUES_SET_NUMBERS = exports.SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS = exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS = exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_INFINITE_NUMBERS = exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS = exports.SIMPLE_TYPE_VALUES_SET_EMPTY = void 0;
exports.SIMPLE_TYPE_VALUES_SET_EMPTY = [
    null,
    undefined,
    NaN,
    0,
    0.0,
    '',
    ' ',
    void 0,
];
exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS = [
    Number.MIN_SAFE_INTEGER,
    Number.MAX_VALUE,
    1,
    1.1,
];
exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_INFINITE_NUMBERS = [
    Number.POSITIVE_INFINITY,
    Number.NEGATIVE_INFINITY,
];
exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS = [
    ...exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
    ...exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_INFINITE_NUMBERS,
];
exports.SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS = [NaN, 0, 0.0];
exports.SIMPLE_TYPE_VALUES_SET_NUMBERS = [
    ...exports.SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS,
    ...exports.SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS.map(Number),
    ...exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
    ...exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS.map(Number),
];
exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS = [
    '0',
    ' 0 ',
    ' string, ',
    ' String, ',
    '!@#$%&*()123456№;%:+-.,`"\'',
];
exports.SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS = ['', ' ', '  '];
exports.SIMPLE_TYPE_VALUES_SET_STRINGS = [
    ...exports.SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS,
    ...exports.SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS.map(String),
    ...exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
    ...exports.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS.map(String),
];
//# sourceMappingURL=simpleTypes.stubs.js.map