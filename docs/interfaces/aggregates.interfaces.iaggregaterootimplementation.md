[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRootImplementation

# Interface: IAggregateRootImplementation<Id, Type, E\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRootImplementation

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\>[`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

## Hierarchy

- [`IAggregateRoot`](aggregates.interfaces.iaggregateroot.md)<`Id`, `Type`\>

- [`IEntityImplementation`](entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>

  ↳ **`IAggregateRootImplementation`**

## Implemented by

- [`BaseAggregateRootAbstractClass`](../classes/aggregates.abstractclasses.baseaggregaterootabstractclass.md)

## Table of contents

### Properties

- [id](aggregates.interfaces.iaggregaterootimplementation.md#id)
- [isDeleted](aggregates.interfaces.iaggregaterootimplementation.md#isdeleted)
- [type](aggregates.interfaces.iaggregaterootimplementation.md#type)

### Methods

- [delete](aggregates.interfaces.iaggregaterootimplementation.md#delete)
- [emit](aggregates.interfaces.iaggregaterootimplementation.md#emit)
- [emitEventFailed](aggregates.interfaces.iaggregaterootimplementation.md#emiteventfailed)
- [equalsTo](aggregates.interfaces.iaggregaterootimplementation.md#equalsto)
- [getTransferableProps](aggregates.interfaces.iaggregaterootimplementation.md#gettransferableprops)
- [subscribe](aggregates.interfaces.iaggregaterootimplementation.md#subscribe)
- [subscribeOnFailed](aggregates.interfaces.iaggregaterootimplementation.md#subscribeonfailed)
- [unsubscribe](aggregates.interfaces.iaggregaterootimplementation.md#unsubscribe)

## Properties

### id

• `Readonly` **id**: `Id`

#### Inherited from

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[id](entities.interfaces.ientityimplementation.md#id)

#### Defined in

[src/entities/interfaces/entity.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L18)

___

### isDeleted

• `Readonly` **isDeleted**: `boolean`

#### Inherited from

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[isDeleted](entities.interfaces.ientityimplementation.md#isdeleted)

#### Defined in

[src/entities/interfaces/entity.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L20)

___

### type

• `Readonly` **type**: `Type`

#### Inherited from

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[type](entities.interfaces.ientityimplementation.md#type)

#### Defined in

[src/entities/interfaces/entity.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L19)

## Methods

### delete

▸ **delete**(): `void`

#### Returns

`void`

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/aggregates/interfaces/aggregateRoot.ts#L46)

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

[src/entities/interfaces/entity.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L30)

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

[src/entities/interfaces/entity.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L32)

___

### equalsTo

▸ **equalsTo**(`anotherAggregate`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `anotherAggregate` | [`IAggregateRoot`](aggregates.interfaces.iaggregateroot.md)<[`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject), `string`\> |

#### Returns

`boolean`

#### Overrides

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[equalsTo](entities.interfaces.ientityimplementation.md#equalsto)

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:42](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/aggregates/interfaces/aggregateRoot.ts#L42)

___

### getTransferableProps

▸ **getTransferableProps**(): `TPickTransferableProperties`<[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>\>

#### Returns

`TPickTransferableProperties`<[`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)<`Id`, `Type`, `E`\>\>

#### Overrides

[IEntityImplementation](entities.interfaces.ientityimplementation.md).[getTransferableProps](entities.interfaces.ientityimplementation.md#gettransferableprops)

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:45](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/aggregates/interfaces/aggregateRoot.ts#L45)

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

[src/entities/interfaces/entity.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L36)

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

[src/entities/interfaces/entity.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L41)

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

[src/entities/interfaces/entity.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/entities/interfaces/entity.ts#L46)
