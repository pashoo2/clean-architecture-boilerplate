[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [classes](../modules/events.classes.md) / BaseDomainEventBus

# Class: BaseDomainEventBus<E, EE\>

[events](../modules/events.md).[classes](../modules/events.classes.md).BaseDomainEventBus

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](../interfaces/events.interfaces.ieventslist.md) |
| `EE` | extends `EventEmitter` |

## Implements

- [`IDomainEventBus`](../interfaces/events.interfaces.idomaineventbus.md)<`E`\>

## Table of contents

### Constructors

- [constructor](events.classes.basedomaineventbus.md#constructor)

### Properties

- [\_listenersAllEvents](events.classes.basedomaineventbus.md#_listenersallevents)

### Accessors

- [\_eventEmitter](events.classes.basedomaineventbus.md#_eventemitter)

### Methods

- [\_emitEventForAllEventsListeners](events.classes.basedomaineventbus.md#_emiteventforalleventslisteners)
- [\_getFailedEventNameByEventName](events.classes.basedomaineventbus.md#_getfailedeventnamebyeventname)
- [emit](events.classes.basedomaineventbus.md#emit)
- [emitEventFailed](events.classes.basedomaineventbus.md#emiteventfailed)
- [subscribe](events.classes.basedomaineventbus.md#subscribe)
- [subscribeAllEvents](events.classes.basedomaineventbus.md#subscribeallevents)
- [subscribeOnFailed](events.classes.basedomaineventbus.md#subscribeonfailed)
- [unsubscribe](events.classes.basedomaineventbus.md#unsubscribe)
- [unsubscribeListenerAllEvents](events.classes.basedomaineventbus.md#unsubscribelistenerallevents)

## Constructors

### constructor

• **new BaseDomainEventBus**<`E`, `EE`\>(`__eventEmitter`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](../interfaces/events.interfaces.ieventslist.md) |
| `EE` | extends `EventEmitter`<`EE`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `__eventEmitter` | `EE` |

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L20)

## Properties

### \_listenersAllEvents

• `Protected` **\_listenersAllEvents**: `Set`<[`IDomainAllEventsListener`](../interfaces/events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\>\>

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L19)

## Accessors

### \_eventEmitter

• `Protected` `get` **_eventEmitter**(): `EE`

#### Returns

`EE`

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:16](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L16)

## Methods

### \_emitEventForAllEventsListeners

▸ `Protected` **_emitEventForAllEventsListeners**<`Ev`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ev` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`string`, `any`\> \| [`IDomainEventFailed`](../interfaces/events.interfaces.idomaineventfailed.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Ev` |

#### Returns

`void`

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:74](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L74)

___

### \_getFailedEventNameByEventName

▸ `Protected` **_getFailedEventNameByEventName**<`N`\>(`eventName`): \`failed::${E[N]["name"]}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `N` |

#### Returns

\`failed::${E[N]["name"]}\`

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:68](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L68)

___

### emit

▸ **emit**<`Ev`\>(`event`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ev` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`string`, `any`, `Ev`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `Ev` |

#### Returns

`void`

#### Implementation of

[IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md).[emit](../interfaces/events.interfaces.idomaineventbus.md#emit)

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:22](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L22)

___

### emitEventFailed

▸ **emitEventFailed**<`Ev`\>(`eventFailed`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Ev` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`string`, `any`, `Ev`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventFailed` | [`IDomainEventFailed`](../interfaces/events.interfaces.idomaineventfailed.md)<`Ev`\> |

#### Returns

`void`

#### Implementation of

[IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md).[emitEventFailed](../interfaces/events.interfaces.idomaineventbus.md#emiteventfailed)

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:26](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L26)

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
| `eventListener` | [`IDomainEventListener`](../interfaces/events.interfaces.idomaineventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Implementation of

[IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md).[subscribe](../interfaces/events.interfaces.idomaineventbus.md#subscribe)

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:37](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L37)

___

### subscribeAllEvents

▸ **subscribeAllEvents**(`eventListener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventListener` | [`IDomainAllEventsListener`](../interfaces/events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> |

#### Returns

`void`

#### Implementation of

[IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md).[subscribeAllEvents](../interfaces/events.interfaces.idomaineventbus.md#subscribeallevents)

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:32](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L32)

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
| `eventListener` | [`IDomainFailedEventListener`](../interfaces/events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Implementation of

[IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md).[subscribeOnFailed](../interfaces/events.interfaces.idomaineventbus.md#subscribeonfailed)

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:43](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L43)

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
| `eventListener` | [`IDomainAllEventsListener`](../interfaces/events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> \| [`IDomainEventListener`](../interfaces/events.interfaces.idomaineventlistener.md)<`E`[`N`]\> \| [`IDomainFailedEventListener`](../interfaces/events.interfaces.idomainfailedeventlistener.md)<`E`[`N`]\> |

#### Returns

`void`

#### Implementation of

[IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md).[unsubscribe](../interfaces/events.interfaces.idomaineventbus.md#unsubscribe)

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:50](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L50)

___

### unsubscribeListenerAllEvents

▸ **unsubscribeListenerAllEvents**(`eventListener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventListener` | [`IDomainAllEventsListener`](../interfaces/events.interfaces.idomainalleventslistener.md)<[`TGetEvents`](../modules/events.interfaces.md#tgetevents)<`E`\>\> |

#### Returns

`void`

#### Implementation of

[IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md).[unsubscribeListenerAllEvents](../interfaces/events.interfaces.idomaineventbus.md#unsubscribelistenerallevents)

#### Defined in

[src/events/classes/baseDomainEventBus/baseDomainEventBus.ts:63](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/classes/baseDomainEventBus/baseDomainEventBus.ts#L63)
