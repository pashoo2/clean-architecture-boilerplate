[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainAllEventsListener

# Interface: IDomainAllEventsListener<DE\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainAllEventsListener

## Type parameters

| Name | Type |
| :------ | :------ |
| `DE` | extends [`IDomainEvent`](events.interfaces.idomainevent.md) |

## Hierarchy

- [`IDomainEventListener`](events.interfaces.idomaineventlistener.md)<`DE`\>

- [`IDomainFailedEventListener`](events.interfaces.idomainfailedeventlistener.md)<`DE`\>

  ↳ **`IDomainAllEventsListener`**

## Callable

### IDomainAllEventsListener

▸ **IDomainAllEventsListener**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DE` |

#### Returns

`void`

#### Defined in

[src/events/interfaces/domainEvents.ts:89](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L89)

### IDomainAllEventsListener

▸ **IDomainAllEventsListener**(`failedEvent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failedEvent` | [`IDomainEventFailed`](events.interfaces.idomaineventfailed.md)<`DE`\> |

#### Returns

`void`

#### Defined in

[src/events/interfaces/domainEvents.ts:93](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/events/interfaces/domainEvents.ts#L93)
