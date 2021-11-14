[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRootImplementationMethods

# Interface: IAggregateRootImplementationMethods

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRootImplementationMethods

## Table of contents

### Methods

- [delete](aggregates.interfaces.iaggregaterootimplementationmethods.md#delete)
- [equalsTo](aggregates.interfaces.iaggregaterootimplementationmethods.md#equalsto)
- [getTransferableProps](aggregates.interfaces.iaggregaterootimplementationmethods.md#gettransferableprops)

## Methods

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRoot.ts#L38)

___

### equalsTo

▸ **equalsTo**(`anotherAggregate`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherAggregate` | [`IAggregateRoot`](aggregates.interfaces.iaggregateroot.md)<[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject), `string`\> |

#### Returns

`boolean`

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:34](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRoot.ts#L34)

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`IAggregateRootImplementationMethods`](aggregates.interfaces.iaggregaterootimplementationmethods.md)\>

#### Returns

`TPickTransferableProperties`<[`IAggregateRootImplementationMethods`](aggregates.interfaces.iaggregaterootimplementationmethods.md)\>

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:37](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRoot.ts#L37)
