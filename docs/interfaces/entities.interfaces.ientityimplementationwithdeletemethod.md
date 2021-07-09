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

- [`IEntityImplementation`](entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>

  ↳ **`IEntityImplementationWithDeleteMethod`**

## Table of contents

### Properties

- [id](entities.interfaces.ientityimplementationwithdeletemethod.md#id)
- [isDeleted](entities.interfaces.ientityimplementationwithdeletemethod.md#isdeleted)
- [type](entities.interfaces.ientityimplementationwithdeletemethod.md#type)

### Methods

- [$delete](entities.interfaces.ientityimplementationwithdeletemethod.md#$delete)
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

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[id](entities.interfaces.ientityimplementation.md#id)

#### Defined in

[src/entities/interfaces/entity.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L18)

___

### isDeleted

• `Readonly` **isDeleted**: `boolean`

#### Inherited from

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[isDeleted](entities.interfaces.ientityimplementation.md#isdeleted)

#### Defined in

[src/entities/interfaces/entity.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L20)

___

### type

• `Readonly` **type**: `Type`

#### Inherited from

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[type](entities.interfaces.ientityimplementation.md#type)

#### Defined in

[src/entities/interfaces/entity.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L19)

## Methods

### $delete

▸ **$delete**(): `void`

#### Returns

`void`

#### Defined in

[src/entities/interfaces/entity.ts:58](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L58)

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

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[emit](entities.interfaces.ientityimplementation.md#emit)

#### Defined in

[src/entities/interfaces/entity.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L30)

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

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[emitEventFailed](entities.interfaces.ientityimplementation.md#emiteventfailed)

#### Defined in

[src/entities/interfaces/entity.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L32)

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

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[equalsTo](entities.interfaces.ientityimplementation.md#equalsto)

#### Defined in

[src/interfaces/comparison.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/interfaces/comparison.ts#L2)

___

### getTransferableProps

▸ **getTransferableProps**(): `Readonly`<`TPickTransferableProperties`<[`IEntityImplementationWithDeleteMethod`](entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>\>\>

#### Returns

`Readonly`<`TPickTransferableProperties`<[`IEntityImplementationWithDeleteMethod`](entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>\>\>

#### Inherited from

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[getTransferableProps](entities.interfaces.ientityimplementation.md#gettransferableprops)

#### Defined in

[src/interfaces/transferable.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/interfaces/transferable.ts#L12)

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

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[subscribe](entities.interfaces.ientityimplementation.md#subscribe)

#### Defined in

[src/entities/interfaces/entity.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L36)

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

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[subscribeOnFailed](entities.interfaces.ientityimplementation.md#subscribeonfailed)

#### Defined in

[src/entities/interfaces/entity.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L41)

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

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[unsubscribe](entities.interfaces.ientityimplementation.md#unsubscribe)

#### Defined in

[src/entities/interfaces/entity.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/entities/interfaces/entity.ts#L46)
