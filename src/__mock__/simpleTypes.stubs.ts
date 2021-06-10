export const SIMPLE_TYPE_VALUES_SET_EMPTY = [
  null,
  undefined,
  NaN,
  0,
  0.0,
  '',
  ' ',
  void 0,
  new Number(),
  new Number(0),
  new Number(0.0),
  new String(),
  new String(''),
  new String(' '),
];

export const SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS = [
  Number.MIN_SAFE_INTEGER,
  Number.MAX_VALUE,
  1,
  1.1,
  new Number(1),
  new Number(1.1),
];

export const SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_INFINITE_NUMBERS = [
  Number.POSITIVE_INFINITY,
  Number.NEGATIVE_INFINITY,
];

export const SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS = [
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_INFINITE_NUMBERS,
];

export const SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS = [NaN, 0, 0.0];

export const SIMPLE_TYPE_VALUES_SET_NUMBERS = [
  ...SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS,
  ...SIMPLE_TYPE_VALUES_SET_EMPTY_NUMBERS.map(Number),
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS,
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_NUMBERS.map(Number),
];

export const SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS = [
  '0',
  ' 0 ',
  ' string, ',
  ' String, ',
  '!@#$%&*()123456№;%:+-.,`"\'',
  new String('!@#$%&*()123456№;%:+-.,`"\''),
  new String('0'),
];

export const SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS = [
  '',
  ' ',
  '  ',
  new String(''),
];

export const SIMPLE_TYPE_VALUES_SET_STRINGS = [
  ...SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS,
  ...SIMPLE_TYPE_VALUES_SET_EMPTY_STRINGS.map(String),
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
  ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS.map(String),
];
