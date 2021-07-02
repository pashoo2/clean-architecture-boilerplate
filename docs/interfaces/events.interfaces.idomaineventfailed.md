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

[src/events/interfaces/domainEvents.ts:83](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L83)

___

### failedEvent

• **failedEvent**: `E`

#### Defined in

[src/events/interfaces/domainEvents.ts:82](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L82)

___

### name

• **name**: \`failed::${E["name"]}\`

#### Defined in

[src/events/interfaces/domainEvents.ts:81](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/events/interfaces/domainEvents.ts#L81)
