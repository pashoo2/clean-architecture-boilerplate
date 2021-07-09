[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [classes](../modules/events.classes.md) / BaseDomainEventClass

# Class: BaseDomainEventClass<N, P\>

[events](../modules/events.md).[classes](../modules/events.classes.md).BaseDomainEventClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- **`BaseDomainEventClass`**

  ↳ [`BaseDomainEntityEvent`](events.classes.basedomainentityevent.md)

## Implements

- [`IDomainEvent`](../interfaces/events.interfaces.idomainevent.md)<`N`, `P`\>

## Table of contents

### Constructors

- [constructor](events.classes.basedomaineventclass.md#constructor)

### Properties

- [\_\_id](events.classes.basedomaineventclass.md#__id)
- [\_\_metaVersion](events.classes.basedomaineventclass.md#__metaversion)
- [\_\_payload](events.classes.basedomaineventclass.md#__payload)
- [\_name](events.classes.basedomaineventclass.md#_name)

### Accessors

- [id](events.classes.basedomaineventclass.md#id)
- [metaVersion](events.classes.basedomaineventclass.md#metaversion)
- [name](events.classes.basedomaineventclass.md#name)
- [payload](events.classes.basedomaineventclass.md#payload)

### Methods

- [\_getSerializableObjectRepresentation](events.classes.basedomaineventclass.md#_getserializableobjectrepresentation)
- [serialize](events.classes.basedomaineventclass.md#serialize)

## Constructors

### constructor

• **new BaseDomainEventClass**<`N`, `P`\>(`parameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `N` | extends `string``string` |
| `P` | extends `TSerializableValue``undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `TBaseDomainEventClassParameters`<`P`\> |

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:47](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L47)

## Properties

### \_\_id

• `Private` `Readonly` **\_\_id**: `string`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:47](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L47)

___

### \_\_metaVersion

• `Private` `Readonly` **\_\_metaVersion**: `number`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:45](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L45)

___

### \_\_payload

• `Private` `Readonly` **\_\_payload**: `P`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:46](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L46)

___

### \_name

• `Protected` `Abstract` **\_name**: `N`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:43](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L43)

## Accessors

### id

• `get` **id**(): `string`

A unique identifier of an event

#### Returns

`string`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[id](../interfaces/events.interfaces.idomainevent.md#id)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:39](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L39)

___

### metaVersion

• `get` **metaVersion**(): `number`

Version of the event format

#### Returns

`number`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[metaVersion](../interfaces/events.interfaces.idomainevent.md#metaversion)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L31)

___

### name

• `get` **name**(): `N`

A name of the event

#### Returns

`N`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[name](../interfaces/events.interfaces.idomainevent.md#name)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:27](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L27)

___

### payload

• `get` **payload**(): `P`

Payload of the event

#### Returns

`P`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[payload](../interfaces/events.interfaces.idomainevent.md#payload)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L35)

## Methods

### \_getSerializableObjectRepresentation

▸ `Protected` **_getSerializableObjectRepresentation**(): [`IDomainEventPropertiesSerialized`](../interfaces/events.interfaces.idomaineventpropertiesserialized.md)<`N`, `P`\>

#### Returns

[`IDomainEventPropertiesSerialized`](../interfaces/events.interfaces.idomaineventpropertiesserialized.md)<`N`, `P`\>

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:75](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L75)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IDomainEvent](../interfaces/events.interfaces.idomainevent.md).[serialize](../interfaces/events.interfaces.idomainevent.md#serialize)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:71](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L71)
