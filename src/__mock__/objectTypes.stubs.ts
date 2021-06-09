import {
  SIMPLE_TYPE_VALUES_SET_EMPTY,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
  SIMPLE_TYPE_VALUES_SET_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_STRINGS,
} from './simpleTypes.stubs';

export const OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY = [
  [...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS],
  [...SIMPLE_TYPE_VALUES_SET_NUMBERS],
  [...SIMPLE_TYPE_VALUES_SET_EMPTY],
];
export const OBJECT_TYPE_VALUES_SET_ARRAYS = [
  [],
  new Array(0),
  ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
];
export const OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY = [
  [
    ...SIMPLE_TYPE_VALUES_SET_STRINGS,
    ...SIMPLE_TYPE_VALUES_SET_NUMBERS,
    ...SIMPLE_TYPE_VALUES_SET_EMPTY,
    ...OBJECT_TYPE_VALUES_SET_ARRAYS,
  ].reduce((acc, value, index) => {
    acc[`k-${index}`] = value;
    return acc;
  }, {} as any),
  [20].reduce((acc, nestedCount) => {
    let idx = 0;
    let currentLevel = acc;
    while (idx <= nestedCount) {
      const nextLevel = {};
      currentLevel[`nested_${idx}`] = nextLevel;
      let idx2 = idx;
      while (idx2 <= nestedCount) {
        currentLevel[`nested_${idx2}`] = nextLevel;
        idx2 += 1;
      }
      currentLevel = nextLevel;
      idx += 1;
    }
    return acc;
  }, {} as any),
];
export const OBJECT_TYPE_VALUES_SET_OBJECTS = [
  {},
  ...OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
];
