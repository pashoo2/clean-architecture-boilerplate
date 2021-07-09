[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventListener

# Interface: IDomainEventListener<DE\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventListener

## Type parameters

| Name | Type |
| :------ | :------ |
| `DE` | extends [`IDomainEvent`](events.interfaces.idomainevent.md) |

## Hierarchy

- **`IDomainEventListener`**

  ↳ [`IDomainAllEventsListener`](events.interfaces.idomainalleventslistener.md)

## Callable

### IDomainEventListener

▸ **IDomainEventListener**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `DE` |

#### Returns

`void`

#### Defined in

[src/events/interfaces/domainEvents.ts:89](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/interfaces/domainEvents.ts#L89)
