[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [classes](../modules/events.classes.md) / BaseDomainEntityEvent

# Class: BaseDomainEntityEvent<EntityId, EntityType, N, P\>

[events](../modules/events.md).[classes](../modules/events.classes.md).BaseDomainEntityEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends [`TDomainEventPayload`](../modules/events.interfaces.md#tdomaineventpayload)`undefined` |

## Hierarchy

- [`BaseDomainEventClass`](events.classes.basedomaineventclass.md)<`N`, `P`\>

  ↳ **`BaseDomainEntityEvent`**

  ↳↳ [`BaseDomainEntityCreateEvent`](events.classes.basedomainentitycreateevent.md)

  ↳↳ [`BaseDomainEntityDeleteEvent`](events.classes.basedomainentitydeleteevent.md)

## Implements

- [`IDomainEntityEvent`](../interfaces/events.interfaces.idomainentityevent.md)<`EntityId`, `EntityType`, `N`, `P`, `EDomainEntityEventType.ENTITY_EVENT`\>

## Table of contents

### Constructors

- [constructor](events.classes.basedomainentityevent.md#constructor)

### Properties

- [\_\_entityId](events.classes.basedomainentityevent.md#__entityid)
- [\_entityType](events.classes.basedomainentityevent.md#_entitytype)
- [\_name](events.classes.basedomainentityevent.md#_name)

### Accessors

- [entityId](events.classes.basedomainentityevent.md#entityid)
- [entityType](events.classes.basedomainentityevent.md#entitytype)
- [eventType](events.classes.basedomainentityevent.md#eventtype)
- [id](events.classes.basedomainentityevent.md#id)
- [metaVersion](events.classes.basedomainentityevent.md#metaversion)
- [name](events.classes.basedomainentityevent.md#name)
- [payload](events.classes.basedomainentityevent.md#payload)

### Methods

- [\_getSerializableObjectRepresentation](events.classes.basedomainentityevent.md#_getserializableobjectrepresentation)
- [serialize](events.classes.basedomainentityevent.md#serialize)

## Constructors

### constructor

• **new BaseDomainEntityEvent**<`EntityId`, `EntityType`, `N`, `P`\>(`parameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |
| `N` | extends `string``string` |
| `P` | extends `TSerializableValue``undefined` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `TBaseDomainEntityEventParameters`<`EntityId`, `P`\> |

#### Overrides

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[constructor](events.classes.basedomaineventclass.md#constructor)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L51)

## Properties

### \_\_entityId

• `Private` **\_\_entityId**: `EntityId`

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:49](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L49)

___

### \_entityType

• `Protected` `Abstract` **\_entityType**: `EntityType`

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L51)

___

### \_name

• `Protected` `Abstract` **\_name**: `N`

#### Inherited from

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[_name](events.classes.basedomaineventclass.md#_name)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:43](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L43)

## Accessors

### entityId

• `get` **entityId**(): `EntityId`

#### Returns

`EntityId`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[entityId](../interfaces/events.interfaces.idomainentityevent.md#entityid)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:37](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L37)

___

### entityType

• `get` **entityType**(): `EntityType`

#### Returns

`EntityType`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[entityType](../interfaces/events.interfaces.idomainentityevent.md#entitytype)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L41)

___

### eventType

• `get` **eventType**(): `ENTITY_EVENT`

#### Returns

`ENTITY_EVENT`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[eventType](../interfaces/events.interfaces.idomainentityevent.md#eventtype)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:45](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L45)

___

### id

• `get` **id**(): `string`

A unique identifier of an event

#### Returns

`string`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[id](../interfaces/events.interfaces.idomainentityevent.md#id)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:39](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L39)

___

### metaVersion

• `get` **metaVersion**(): `number`

Version of the event format

#### Returns

`number`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[metaVersion](../interfaces/events.interfaces.idomainentityevent.md#metaversion)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L31)

___

### name

• `get` **name**(): `N`

A name of the event

#### Returns

`N`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[name](../interfaces/events.interfaces.idomainentityevent.md#name)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:27](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L27)

___

### payload

• `get` **payload**(): `P`

Payload of the event

#### Returns

`P`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[payload](../interfaces/events.interfaces.idomainentityevent.md#payload)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L35)

## Methods

### \_getSerializableObjectRepresentation

▸ `Protected` **_getSerializableObjectRepresentation**(): [`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, `N`, `P`, `ENTITY_EVENT`\>

#### Returns

[`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, `N`, `P`, `ENTITY_EVENT`\>

#### Overrides

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[_getSerializableObjectRepresentation](events.classes.basedomaineventclass.md#_getserializableobjectrepresentation)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:58](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L58)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

[IDomainEntityEvent](../interfaces/events.interfaces.idomainentityevent.md).[serialize](../interfaces/events.interfaces.idomainentityevent.md#serialize)

#### Inherited from

[BaseDomainEventClass](events.classes.basedomaineventclass.md).[serialize](events.classes.basedomaineventclass.md#serialize)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:71](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L71)
