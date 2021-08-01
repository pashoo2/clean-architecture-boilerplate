[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntityImplementation

# Interface: IEntityImplementation<Id, Type, E\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntityImplementation

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

## Hierarchy

- [`IEntity`](entities.interfaces.ientity.md)<`Id`, `Type`\>

- `IComparable`<[`IEntity`](entities.interfaces.ientity.md)<[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject), `string`\>\>

- `ITransferable`

  ↳ **`IEntityImplementation`**

  ↳↳ [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)

  ↳↳ [`IEntityImplementationWithDeleteMethod`](entities.interfaces.ientityimplementationwithdeletemethod.md)

## Implemented by

- [`BaseEntityAbstractClass`](../classes/entities.abstractclasses.baseentityabstractclass.md)
- [`BaseEntityAbstractClass`](../classes/entities.interfaces.baseentityabstractclass.md)

## Table of contents

### Properties

- [id](entities.interfaces.ientityimplementation.md#id)
- [isDeleted](entities.interfaces.ientityimplementation.md#isdeleted)
- [type](entities.interfaces.ientityimplementation.md#type)

### Methods

- [emit](entities.interfaces.ientityimplementation.md#emit)
- [emitEventFailed](entities.interfaces.ientityimplementation.md#emiteventfailed)
- [equalsTo](entities.interfaces.ientityimplementation.md#equalsto)
- [getTransferableProps](entities.interfaces.ientityimplementation.md#gettransferableprops)
- [subscribe](entities.interfaces.ientityimplementation.md#subscribe)
- [subscribeOnFailed](entities.interfaces.ientityimplementation.md#subscribeonfailed)
- [unsubscribe](entities.interfaces.ientityimplementation.md#unsubscribe)

## Properties

### id

• `Readonly` **id**: `Id`

#### Inherited from

[IEntity](entities.interfaces.ientity.md).[id](entities.interfaces.ientity.md#id)

#### Defined in

[src/entities/interfaces/entity.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L18)

___

### isDeleted

• `Readonly` **isDeleted**: `boolean`

#### Inherited from

[IEntity](entities.interfaces.ientity.md).[isDeleted](entities.interfaces.ientity.md#isdeleted)

#### Defined in

[src/entities/interfaces/entity.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L20)

___

### type

• `Readonly` **type**: `Type`

#### Inherited from

[IEntity](entities.interfaces.ientity.md).[type](entities.interfaces.ientity.md#type)

#### Defined in

[src/entities/interfaces/entity.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L19)

## Methods

### emit

▸ **emit**<`Event`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends [`IDomainEvent`](events.interfaces.idomainevent.md)<`string`, `any`, `Event`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Event` |

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entity.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L30)

___

### emitEventFailed

▸ **emitEventFailed**<`Ev`\>(`eventFailed`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ev` | extends [`IDomainEvent`](events.interfaces.idomainevent.md)<`string`, `any`, `Ev`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFailed` | [`IDomainEventFailed`](events.interfaces.idomaineventfailed.md)<`Ev`\> |

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entity.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L32)

___

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IEntity`](entities.interfaces.ientity.md)<[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject), `string`\> |

#### Returns

`boolean`

#### Inherited from

IComparable.equalsTo

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/interfaces/comparison.ts#L2)

___

### getTransferableProps

▸ **getTransferableProps**(): `Readonly`<`TPickTransferableProperties`<[`IEntityImplementation`](entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>\>\>

#### Returns

`Readonly`<`TPickTransferableProperties`<[`IEntityImplementation`](entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>\>\>

#### Inherited from

ITransferable.getTransferableProps

#### Defined in

[src/interfaces/transferable.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/interfaces/transferable.ts#L12)

___

### subscribe

▸ **subscribe**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainEventListener`](events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entity.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L36)

___

### subscribeOnFailed

▸ **subscribeOnFailed**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainFailedEventListener`](events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entity.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L41)

___

### unsubscribe

▸ **unsubscribe**<`N`\>(`eventName`, `eventListener`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |
| `eventListener` | [`IDomainEventListener`](events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entity.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L46)
