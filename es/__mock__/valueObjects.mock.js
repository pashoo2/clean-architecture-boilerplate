"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleIdentityValueObjectClassWithComparisonMock = exports.SimpleIdentityValueObjectClassWithComparisonMock = exports.MultipleIdentityValueObjectClassMock = exports.MultipleValueObjectClassMock = exports.SimpleIdentityValueObjectClassMock = exports.SimpleValueObjectClassMock = exports.UNIQUE_ENTITY_IDENTITY_MULTI_STUB = exports.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB = void 0;
const baseValueObjectClassFabrics_1 = require("../valueObjects/implementations/baseValueObjectClassFabrics");
const multipleValuesValueObjectBaseClassFabrics_1 = require("../valueObjects/implementations/multipleValuesValueObjectBaseClassFabrics");
exports.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB = 'UNIQUE_ENTITY_IDENTITY_SIMPLE';
exports.UNIQUE_ENTITY_IDENTITY_MULTI_STUB = {
    id: 'UNIQUE_ENTITY_IDENTITY_MULTI',
};
const simpleIdentityValueObjectClassFabricParameters = {
    compareValues: jest.fn(() => true),
    serializeValue: jest.fn(() => exports.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB),
    validateValue: jest.fn(() => true),
};
class SimpleValueObjectClassMock extends (0, baseValueObjectClassFabrics_1.baseValueObjectClassFabric)(simpleIdentityValueObjectClassFabricParameters) {
}
exports.SimpleValueObjectClassMock = SimpleValueObjectClassMock;
class SimpleIdentityValueObjectClassMock extends (0, baseValueObjectClassFabrics_1.baseValueObjectClassFabric)(simpleIdentityValueObjectClassFabricParameters) {
}
exports.SimpleIdentityValueObjectClassMock = SimpleIdentityValueObjectClassMock;
const multipleIdentityValueObjectClassFabricParameters = {
    compareValues: jest.fn(() => true),
    serializeValue: jest.fn(() => JSON.stringify(exports.UNIQUE_ENTITY_IDENTITY_MULTI_STUB)),
    validateValue: jest.fn(() => true),
};
class MultipleValueObjectClassMock extends (0, multipleValuesValueObjectBaseClassFabrics_1.multipleValuesValueObjectBaseFabric)(multipleIdentityValueObjectClassFabricParameters) {
}
exports.MultipleValueObjectClassMock = MultipleValueObjectClassMock;
class MultipleIdentityValueObjectClassMock extends (0, multipleValuesValueObjectBaseClassFabrics_1.multipleValuesValueObjectBaseFabric)(multipleIdentityValueObjectClassFabricParameters) {
}
exports.MultipleIdentityValueObjectClassMock = MultipleIdentityValueObjectClassMock;
const simpleIdentityValueObjectClassFabricWithComparisonParameters = {
    compareValues: jest.fn((a, b) => String(a).trim() === String(b).trim()),
    serializeValue: jest.fn(() => exports.UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB),
    validateValue: jest.fn(() => true),
};
class SimpleIdentityValueObjectClassWithComparisonMock extends (0, baseValueObjectClassFabrics_1.baseValueObjectClassFabric)(simpleIdentityValueObjectClassFabricWithComparisonParameters) {
}
exports.SimpleIdentityValueObjectClassWithComparisonMock = SimpleIdentityValueObjectClassWithComparisonMock;
const multipleIdentityValueObjectClassFabricWithComparisonParameters = {
    compareValues: jest.fn((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    serializeValue: jest.fn(() => JSON.stringify(exports.UNIQUE_ENTITY_IDENTITY_MULTI_STUB)),
    validateValue: jest.fn(() => true),
};
class MultipleIdentityValueObjectClassWithComparisonMock extends (0, multipleValuesValueObjectBaseClassFabrics_1.multipleValuesValueObjectBaseFabric)(multipleIdentityValueObjectClassFabricWithComparisonParameters) {
}
exports.MultipleIdentityValueObjectClassWithComparisonMock = MultipleIdentityValueObjectClassWithComparisonMock;
//# sourceMappingURL=valueObjects.mock.js.map