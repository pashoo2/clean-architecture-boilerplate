import { TSimpleType } from '../interfaces';
import { IBaseValueObject, IIdentityMultiValueObject, IIdentityValueObjectSimple, IMultiValuesValueObjectBase, IMultiValuesValueObjectValue } from '../valueObjects/interfaces';
export declare const UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB: "UNIQUE_ENTITY_IDENTITY_SIMPLE";
export declare const UNIQUE_ENTITY_IDENTITY_MULTI_STUB: {
    id: string;
};
declare const SimpleValueObjectClassMock_base: import("../valueObjects/interfaces").IBaseValueObjectConstructor<string, string>;
export declare class SimpleValueObjectClassMock extends SimpleValueObjectClassMock_base implements IBaseValueObject<TSimpleType, TSimpleType> {
}
declare const SimpleIdentityValueObjectClassMock_base: import("../valueObjects/interfaces").IBaseValueObjectConstructor<string, string>;
export declare class SimpleIdentityValueObjectClassMock extends SimpleIdentityValueObjectClassMock_base implements IIdentityValueObjectSimple {
}
declare const MultipleValueObjectClassMock_base: import("../valueObjects/interfaces").IMultipleValuesValueObjectBaseConstructor<IMultiValuesValueObjectValue>;
export declare class MultipleValueObjectClassMock extends MultipleValueObjectClassMock_base implements IMultiValuesValueObjectBase<IMultiValuesValueObjectValue> {
}
declare const MultipleIdentityValueObjectClassMock_base: import("../valueObjects/interfaces").IMultipleValuesValueObjectBaseConstructor<{
    id: string;
}>;
export declare class MultipleIdentityValueObjectClassMock extends MultipleIdentityValueObjectClassMock_base implements IIdentityMultiValueObject<typeof UNIQUE_ENTITY_IDENTITY_MULTI_STUB> {
}
declare const SimpleIdentityValueObjectClassWithComparisonMock_base: import("../valueObjects/interfaces").IBaseValueObjectConstructor<string, string>;
export declare class SimpleIdentityValueObjectClassWithComparisonMock extends SimpleIdentityValueObjectClassWithComparisonMock_base implements IIdentityValueObjectSimple {
}
declare const MultipleIdentityValueObjectClassWithComparisonMock_base: import("../valueObjects/interfaces").IMultipleValuesValueObjectBaseConstructor<{
    id: string;
}>;
export declare class MultipleIdentityValueObjectClassWithComparisonMock extends MultipleIdentityValueObjectClassWithComparisonMock_base implements IIdentityMultiValueObject<typeof UNIQUE_ENTITY_IDENTITY_MULTI_STUB> {
}
export {};
