"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OBJECT_TYPE_VALUES_SET_WITH_CONSTRUCTOR = exports.OBJECT_TYPE_VALUES_SET_DATES = exports.OBJECT_TYPE_VALUES_SET_OBJECTS = exports.OBJECT_TYPE_VALUES_SET_OBJECTS_EMPTY = exports.OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR = exports.OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR_SERIALIZABLE = exports.OBJECT_TYPE_VALUE_WITHOUT_CONSTRUCTOR_WITH_SIMPLE_VALUES = exports.OBJECT_TYPE_VALUES_SET_ARRAYS = exports.OBJECT_TYPE_VALUES_SET_ARRAYS_EMPTY = exports.OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY = exports.OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES = void 0;
const simpleTypes_stubs_1 = require("./simpleTypes.stubs");
exports.OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES = [
    [...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS],
    [...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS],
];
exports.OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY = [
    ...exports.OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY_NOT_EMPTY_VALUES,
    [...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_NUMBERS],
    [...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_EMPTY],
];
exports.OBJECT_TYPE_VALUES_SET_ARRAYS_EMPTY = [[], new Array(0)];
exports.OBJECT_TYPE_VALUES_SET_ARRAYS = [
    ...exports.OBJECT_TYPE_VALUES_SET_ARRAYS_EMPTY,
    ...exports.OBJECT_TYPE_VALUES_SET_ARRAYS_NOT_EMPTY,
];
exports.OBJECT_TYPE_VALUE_WITHOUT_CONSTRUCTOR_WITH_SIMPLE_VALUES = [
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
}, {});
exports.OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR_SERIALIZABLE = [
    [
        ...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
        ...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
    ].reduce((acc, value, index) => {
        acc[`k-${index}`] = value;
        return acc;
    }, {}),
];
exports.OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR = [
    [
        ...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_STRINGS,
        ...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_NUMBERS,
        ...simpleTypes_stubs_1.SIMPLE_TYPE_VALUES_SET_EMPTY,
        ...exports.OBJECT_TYPE_VALUES_SET_ARRAYS,
    ].reduce((acc, value, index) => {
        acc[`k-${index}`] = value;
        return acc;
    }, {}),
    exports.OBJECT_TYPE_VALUE_WITHOUT_CONSTRUCTOR_WITH_SIMPLE_VALUES,
];
exports.OBJECT_TYPE_VALUES_SET_OBJECTS_EMPTY = [{}];
exports.OBJECT_TYPE_VALUES_SET_OBJECTS = [
    ...exports.OBJECT_TYPE_VALUES_SET_OBJECTS_EMPTY,
    ...exports.OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR,
];
exports.OBJECT_TYPE_VALUES_SET_DATES = [
    new Date(0),
    new Date(),
    new Date(0, 0, 0),
    new Date(1900, 0, 0),
];
exports.OBJECT_TYPE_VALUES_SET_WITH_CONSTRUCTOR = [
    new (class TestClass {
    })(),
    new ArrayBuffer(1),
    new Error(),
];
//# sourceMappingURL=objectTypes.stubs.js.map