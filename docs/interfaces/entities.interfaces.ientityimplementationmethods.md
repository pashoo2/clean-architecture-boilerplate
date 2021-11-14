[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntityImplementationMethods

# Interface: IEntityImplementationMethods<Id, Type, E\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntityImplementationMethods

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseEntityEventsList`](entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

## Table of contents

### Methods

- [emit](entities.interfaces.ientityimplementationmethods.md#emit)
- [emitEventFailed](entities.interfaces.ientityimplementationmethods.md#emiteventfailed)
- [subscribe](entities.interfaces.ientityimplementationmethods.md#subscribe)
- [subscribeOnFailed](entities.interfaces.ientityimplementationmethods.md#subscribeonfailed)
- [unsubscribe](entities.interfaces.ientityimplementationmethods.md#unsubscribe)

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

#### Defined in

[src/entities/interfaces/entity.ts:30](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L30)

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

#### Defined in

[src/entities/interfaces/entity.ts:44](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/entities/interfaces/entity.ts#L44)
