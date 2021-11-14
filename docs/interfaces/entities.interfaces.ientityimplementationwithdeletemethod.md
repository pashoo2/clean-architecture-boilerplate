[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntityImplementationWithDeleteMethod

# Interface: IEntityImplementationWithDeleteMethod<Id, Type, E\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntityImplementationWithDeleteMethod

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

## Hierarchy

- [`TEntityImplementation`](../modules/entities.interfaces.md#tentityimplementation)<`Id`, `Type`, `E`\>

  ↳ **`IEntityImplementationWithDeleteMethod`**

## Table of contents

### Properties

- [id](entities.interfaces.ientityimplementationwithdeletemethod.md#id)
- [isDeleted](entities.interfaces.ientityimplementationwithdeletemethod.md#isdeleted)
- [type](entities.interfaces.ientityimplementationwithdeletemethod.md#type)

### Methods

- [$markDeleted](entities.interfaces.ientityimplementationwithdeletemethod.md#$markdeleted)
- [emit](entities.interfaces.ientityimplementationwithdeletemethod.md#emit)
- [emitEventFailed](entities.interfaces.ientityimplementationwithdeletemethod.md#emiteventfailed)
- [equalsTo](entities.interfaces.ientityimplementationwithdeletemethod.md#equalsto)
- [getTransferableProps](entities.interfaces.ientityimplementationwithdeletemethod.md#gettransferableprops)
- [subscribe](entities.interfaces.ientityimplementationwithdeletemethod.md#subscribe)
- [subscribeOnFailed](entities.interfaces.ientityimplementationwithdeletemethod.md#subscribeonfailed)
- [unsubscribe](entities.interfaces.ientityimplementationwithdeletemethod.md#unsubscribe)

## Properties

### id

• `Readonly` **id**: `Id`

#### Inherited from

TEntityImplementation.id

#### Defined in

[src/entities/interfaces/entity.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L18)

___

### isDeleted

• `Readonly` **isDeleted**: `boolean`

#### Inherited from

TEntityImplementation.isDeleted

#### Defined in

[src/entities/interfaces/entity.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L20)

___

### type

• `Readonly` **type**: `Type`

#### Inherited from

TEntityImplementation.type

#### Defined in

[src/entities/interfaces/entity.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L19)

## Methods

### $markDeleted

▸ **$markDeleted**(): `void`

Just set a flag that the entity's been deleted

**`memberof`** IEntityImplementationWithDeleteMethod

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entity.ts:71](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L71)

___

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

#### Inherited from

TEntityImplementation.emit

#### Defined in

[src/entities/interfaces/entity.ts:28](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L28)

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

#### Inherited from

TEntityImplementation.emitEventFailed

#### Defined in

[src/entities/interfaces/entity.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L30)

___

### equalsTo

▸ **equalsTo**(`anotherValue`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherValue` | [`IEntity`](entities.interfaces.ientity.md)<`Id`, `Type`\> |

#### Returns

`boolean`

#### Inherited from

TEntityImplementation.equalsTo

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/comparison.ts#L2)

___

### getTransferableProps

▸ **getTransferableProps**(): `Readonly`<`TPickTransferableProperties`<[`IEntityImplementationWithDeleteMethod`](entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>\>\>

#### Returns

`Readonly`<`TPickTransferableProperties`<[`IEntityImplementationWithDeleteMethod`](entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>\>\>

#### Inherited from

TEntityImplementation.getTransferableProps

#### Defined in

[src/interfaces/transferable.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/interfaces/transferable.ts#L12)

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

#### Inherited from

TEntityImplementation.subscribe

#### Defined in

[src/entities/interfaces/entity.ts:34](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L34)

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

#### Inherited from

TEntityImplementation.subscribeOnFailed

#### Defined in

[src/entities/interfaces/entity.ts:39](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L39)

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

#### Inherited from

TEntityImplementation.unsubscribe

#### Defined in

[src/entities/interfaces/entity.ts:44](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L44)
