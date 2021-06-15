import {
  SIMPLE_TYPE_VALUES_SET_EMPTY,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from './simpleTypes.stubs';

export const OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES = [
  [...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS],
  [...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS],
];

export const OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY = [
  ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES,
  [...SIMPLE_TYPE_VALUES_SET_NUMBERS],
  [...SIMPLE_TYPE_VALUES_SET_EMPTY],
];
export const OBJECT_TYPE_VALUES_SET_ARRAYS = [
  [],
  new Array(0),
  ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
];

export const OBJECT_TYPE_VALUE_WITHOUT_CONSTRUCTOR_WITH_SIMPLE_VALUES = [
  20,
].reduce((acc, nestedCount) => {
  let idx = 0;
  let currentLevel = acc;
  while (idx <= nestedCount) {
    const nextLevel = {};
    currentLevel[`nested_${idx}`] = nextLevel;
    let idx2 = idx;
    while (idx2 <= nestedCount) {
      currentLevel[`nested_${idx2}`] = {};
      idx2 += 1;
    }
    currentLevel = nextLevel;
    idx += 1;
  }
  return acc;
}, {} as any);

export const OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR_SERIALIZABLE =
  [
    [
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
      ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
    ].reduce((acc, value, index) => {
      acc[`k-${index}`] = value;
      return acc;
    }, {} as any),
  ];

export const OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR = [
  [
    ...SIMPLE_TYPE_VALUES_SET_STRINGS,
    ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
    ...SIMPLE_TYPE_VALUES_SET_EMPTY,
    ...OBJECT_TYPE_VALUES_SET_ARRAYS,
  ].reduce((acc, value, index) => {
    acc[`k-${index}`] = value;
    return acc;
  }, {} as any),
  OBJECT_TYPE_VALUE_WITHOUT_CONSTRUCTOR_WITH_SIMPLE_VALUES,
];

export const OBJECT_TYPE_VALUES_SET_OBJECTS = [
  {},
  ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
];

export const OBJECT_TYPE_VALUES_SET_DATES: Date[] = [
  new Date(0),
  new Date(),
  new Date(0, 0, 0),
  new Date(1900, 0, 0),
];

export const OBJECT_TYPE_VALUES_SET_WITH_CONSTRUCTOR: unknown[] = [
  new (class TestClass {})(),
  new ArrayBuffer(1),
  new Error(),
];
