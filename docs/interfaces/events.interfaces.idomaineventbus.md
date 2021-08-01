[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventBus

# Interface: IDomainEventBus<E\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventBus

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](events.interfaces.ieventslist.md) |

## Implemented by

- [`BaseDomainEventBus`](../classes/events.classes.basedomaineventbus.md)

## Table of contents

### Methods

- [emit](events.interfaces.idomaineventbus.md#emit)
- [emitEventFailed](events.interfaces.idomaineventbus.md#emiteventfailed)
- [subscribe](events.interfaces.idomaineventbus.md#subscribe)
- [subscribeAllEvents](events.interfaces.idomaineventbus.md#subscribeallevents)
- [subscribeOnFailed](events.interfaces.idomaineventbus.md#subscribeonfailed)
- [unsubscribe](events.interfaces.idomaineventbus.md#unsubscribe)
- [unsubscribeListenerAllEvents](events.interfaces.idomaineventbus.md#unsubscribelistenerallevents)

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

[src/events/interfaces/domainEventBus.ts:10](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEventBus.ts#L10)

___

### emitEventFailed

▸ **emitEventFailed**<`Event`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Event` | extends [`IDomainEvent`](events.interfaces.idomainevent.md)<`string`, `any`, `Event`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`IDomainEventFailed`](events.interfaces.idomaineventfailed.md)<`Event`\> |

#### Returns

`void`

#### Defined in

[src/events/interfaces/domainEventBus.ts:12](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEventBus.ts#L12)

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

[src/events/interfaces/domainEventBus.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEventBus.ts#L18)

___

### subscribeAllEvents

▸ **subscribeAllEvents**(`eventListener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventListener` | [`IDomainAllEventsListener`](events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> |

#### Returns

`void`

#### Defined in

[src/events/interfaces/domainEventBus.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEventBus.ts#L15)

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

[src/events/interfaces/domainEventBus.ts:22](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEventBus.ts#L22)

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
| `eventListener` | [`IDomainEventListener`](events.interfaces.idomaineventlistener.md)<`E`[`N`]\> \| [`IDomainFailedEventListener`](events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Defined in

[src/events/interfaces/domainEventBus.ts:27](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEventBus.ts#L27)

___

### unsubscribeListenerAllEvents

▸ **unsubscribeListenerAllEvents**(`eventListener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventListener` | [`IDomainAllEventsListener`](events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> |

#### Returns

`void`

#### Defined in

[src/events/interfaces/domainEventBus.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEventBus.ts#L31)
