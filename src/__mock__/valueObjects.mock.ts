import {baseValueObjectClassFabric} from 'src/valueObjects/implementations/baseValueObjectClassFabrics';
import {multipleValuesValueObjectBaseFabric} from 'src/valueObjects/implementations/multipleValuesValueObjectBaseClassFabrics';
import {
  IBaseValueObjectConstructorFabricParameters,
  IIdentityMultiValueObject,
  IIdentityValueObjectSimple,
  IMultipleValuesValueObjectBaseFabricParameters,
  IMultiValuesValueObjectValue,
} from 'src/valueObjects/interfaces';

export const UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB =
  'UNIQUE_ENTITY_IDENTITY_SIMPLE' as const;

export const UNIQUE_ENTITY_IDENTITY_MULTI_STUB = {
  id: 'UNIQUE_ENTITY_IDENTITY_MULTI',
};

const simpleIdentityValueObjectClassFabricParameters: IBaseValueObjectConstructorFabricParameters<
  string,
  string
> = {
  compareValues: jest.fn(() => true),
  serializeValue: jest.fn(() => UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB),
  validateValue: jest.fn(() => true),
};

export class SimpleIdentityValueObjectClassMock
  extends baseValueObjectClassFabric(
    simpleIdentityValueObjectClassFabricParameters
  )
  implements IIdentityValueObjectSimple {}

const multipleIdentityValueObjectClassFabricParameters: IMultipleValuesValueObjectBaseFabricParameters<IMultiValuesValueObjectValue> =
  {
    compareValues: jest.fn(() => true),
    serializeValue: jest.fn(() =>
      JSON.stringify(UNIQUE_ENTITY_IDENTITY_MULTI_STUB)
    ),
    validateValue: jest.fn(() => true),
  };

export class MultipleIdentityValueObjectClassMock
  extends multipleValuesValueObjectBaseFabric<
    typeof UNIQUE_ENTITY_IDENTITY_MULTI_STUB
  >(multipleIdentityValueObjectClassFabricParameters)
  implements
    IIdentityMultiValueObject<typeof UNIQUE_ENTITY_IDENTITY_MULTI_STUB> {}

const simpleIdentityValueObjectClassFabricWithComparisonParameters: IBaseValueObjectConstructorFabricParameters<
  string,
  string
> = {
  compareValues: jest.fn((a, b) => String(a).trim() === String(b).trim()),
  serializeValue: jest.fn(() => UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB),
  validateValue: jest.fn(() => true),
};

export class SimpleIdentityValueObjectClassWithComparisonMock
  extends baseValueObjectClassFabric(
    simpleIdentityValueObjectClassFabricWithComparisonParameters
  )
  implements IIdentityValueObjectSimple {}

const multipleIdentityValueObjectClassFabricWithComparisonParameters: IMultipleValuesValueObjectBaseFabricParameters<IMultiValuesValueObjectValue> =
  {
    compareValues: jest.fn((a, b) => JSON.stringify(a) === JSON.stringify(b)),
    serializeValue: jest.fn(() =>
      JSON.stringify(UNIQUE_ENTITY_IDENTITY_MULTI_STUB)
    ),
    validateValue: jest.fn(() => true),
  };

export class MultipleIdentityValueObjectClassWithComparisonMock
  extends multipleValuesValueObjectBaseFabric<
    typeof UNIQUE_ENTITY_IDENTITY_MULTI_STUB
  >(multipleIdentityValueObjectClassFabricWithComparisonParameters)
  implements
    IIdentityMultiValueObject<typeof UNIQUE_ENTITY_IDENTITY_MULTI_STUB> {}
