[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](events.md) / interfaces

# Namespace: interfaces

[events](events.md).interfaces

## Table of contents

### Interfaces

- [IAggregateEvent](../interfaces/events.interfaces.iaggregateevent.md)
- [IDomainAllEventsListener](../interfaces/events.interfaces.idomainalleventslistener.md)
- [IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md)
- [IDomainEntityEventPropertiesSerialized](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)
- [IDomainEntityEventSpecificProperties](../interfaces/events.interfaces.idomainentityeventspecificproperties.md)
- [IDomainEntityEventSpecificPropertiesSerialized](../interfaces/events.interfaces.idomainentityeventspecificpropertiesserialized.md)
- [IDomainEntityOrAggregateEvent](../interfaces/events.interfaces.idomainentityoraggregateevent.md)
- [IDomainEvent](../interfaces/events.interfaces.idomainevent.md)
- [IDomainEventBus](../interfaces/events.interfaces.idomaineventbus.md)
- [IDomainEventFailed](../interfaces/events.interfaces.idomaineventfailed.md)
- [IDomainEventListener](../interfaces/events.interfaces.idomaineventlistener.md)
- [IDomainEventPayloadKeyValue](../interfaces/events.interfaces.idomaineventpayloadkeyvalue.md)
- [IDomainEventPropertiesSerialized](../interfaces/events.interfaces.idomaineventpropertiesserialized.md)
- [IDomainEventPropertiesWithPayload](../interfaces/events.interfaces.idomaineventpropertieswithpayload.md)
- [IDomainEventPropertiesWithoutPayload](../interfaces/events.interfaces.idomaineventpropertieswithoutpayload.md)
- [IDomainFailedEventListener](../interfaces/events.interfaces.idomainfailedeventlistener.md)
- [IEventsList](../interfaces/events.interfaces.ieventslist.md)

### Type aliases

- [TDomainEvent](events.interfaces.md#tdomainevent)
- [TDomainEventFailedName](events.interfaces.md#tdomaineventfailedname)
- [TDomainEventFailedNameForDomainEventName](events.interfaces.md#tdomaineventfailednamefordomaineventname)
- [TDomainEventPayload](events.interfaces.md#tdomaineventpayload)
- [TDomainEventProperties](events.interfaces.md#tdomaineventproperties)
- [TGetEvents](events.interfaces.md#tgetevents)
- [TGetEventsNames](events.interfaces.md#tgeteventsnames)

## Type aliases

### TDomainEvent

Ƭ **TDomainEvent**<`N`, `P`\>: `ISerializable`<`string`\> & [`TDomainEventProperties`](events.interfaces.md#tdomaineventproperties)<`N`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](events.interfaces.md#tdomaineventpayload)`undefined` |

#### Defined in

[src/events/interfaces/domainEvents.ts:72](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L72)

___

### TDomainEventFailedName

Ƭ **TDomainEventFailedName**<`E`\>: [`TDomainEventFailedNameForDomainEventName`](events.interfaces.md#tdomaineventfailednamefordomaineventname)<`E`[``"name"``]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md) |

#### Defined in

[src/events/interfaces/domainEvents.ts:80](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L80)

___

### TDomainEventFailedNameForDomainEventName

Ƭ **TDomainEventFailedNameForDomainEventName**<`EventName`\>: \`failed::${EventName}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventName` | extends `string` |

#### Defined in

[src/events/interfaces/domainEvents.ts:77](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L77)

___

### TDomainEventPayload

Ƭ **TDomainEventPayload**: `TSerializableValue`

#### Defined in

[src/events/interfaces/domainEvents.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L15)

___

### TDomainEventProperties

Ƭ **TDomainEventProperties**<`N`, `P`\>: `P` extends `undefined` \| `void` \| `never` ? [`IDomainEventPropertiesWithoutPayload`](../interfaces/events.interfaces.idomaineventpropertieswithoutpayload.md)<`N`\> : [`IDomainEventPropertiesWithPayload`](../interfaces/events.interfaces.idomaineventpropertieswithpayload.md)<`N`, `P`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string` |
| `P` | extends [`TDomainEventPayload`](events.interfaces.md#tdomaineventpayload) |

#### Defined in

[src/events/interfaces/domainEvents.ts:54](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/domainEvents.ts#L54)

___

### TGetEvents

Ƭ **TGetEvents**<`E`\>: `E`[keyof `E`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](../interfaces/events.interfaces.ieventslist.md) |

#### Defined in

[src/events/interfaces/events.ts:10](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/events.ts#L10)

___

### TGetEventsNames

Ƭ **TGetEventsNames**<`E`\>: `E`[keyof `E`] extends [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`any`\> ? keyof `E` : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IEventsList`](../interfaces/events.interfaces.ieventslist.md) |

#### Defined in

[src/events/interfaces/events.ts:7](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/events/interfaces/events.ts#L7)
