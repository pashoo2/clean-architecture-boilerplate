[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [interfaces](../modules/events.interfaces.md) / IDomainEventFailed

# Interface: IDomainEventFailed<E\>

[events](../modules/events.md).[interfaces](../modules/events.interfaces.md).IDomainEventFailed

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`IDomainEvent`](events.interfaces.idomainevent.md) |

## Table of contents

### Properties

- [error](events.interfaces.idomaineventfailed.md#error)
- [failedEvent](events.interfaces.idomaineventfailed.md#failedevent)
- [name](events.interfaces.idomaineventfailed.md#name)

## Properties

### error

• **error**: `Error`

#### Defined in

[src/events/interfaces/domainEvents.ts:86](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L86)

___

### failedEvent

• **failedEvent**: `E`

#### Defined in

[src/events/interfaces/domainEvents.ts:85](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L85)

___

### name

• **name**: \`failed::${E["name"]}\`

#### Defined in

[src/events/interfaces/domainEvents.ts:84](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/events/interfaces/domainEvents.ts#L84)
