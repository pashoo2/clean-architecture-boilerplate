[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [events](../modules/events.md) / [classes](../modules/events.classes.md) / BaseDomainEntityDeleteEvent

# Class: BaseDomainEntityDeleteEvent<EntityId, EntityType\>

[events](../modules/events.md).[classes](../modules/events.classes.md).BaseDomainEntityDeleteEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |

## Hierarchy

- [`BaseDomainEntityEvent`](events.classes.basedomainentityevent.md)<`EntityId`, `EntityType`, typeof `DOMAIN_ENTITY_EVENT_NAME_DELETE`\>

  ↳ **`BaseDomainEntityDeleteEvent`**

## Table of contents

### Constructors

- [constructor](events.classes.basedomainentitydeleteevent.md#constructor)

### Properties

- [\_entityType](events.classes.basedomainentitydeleteevent.md#_entitytype)
- [\_name](events.classes.basedomainentitydeleteevent.md#_name)
- [eventName](events.classes.basedomainentitydeleteevent.md#eventname)

### Accessors

- [entityId](events.classes.basedomainentitydeleteevent.md#entityid)
- [entityType](events.classes.basedomainentitydeleteevent.md#entitytype)
- [eventType](events.classes.basedomainentitydeleteevent.md#eventtype)
- [id](events.classes.basedomainentitydeleteevent.md#id)
- [metaVersion](events.classes.basedomainentitydeleteevent.md#metaversion)
- [name](events.classes.basedomainentitydeleteevent.md#name)
- [payload](events.classes.basedomainentitydeleteevent.md#payload)

### Methods

- [\_getSerializableObjectRepresentation](events.classes.basedomainentitydeleteevent.md#_getserializableobjectrepresentation)
- [serialize](events.classes.basedomainentitydeleteevent.md#serialize)

## Constructors

### constructor

• **new BaseDomainEntityDeleteEvent**<`EntityId`, `EntityType`\>(`parameters`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EntityId` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `EntityType` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `TBaseDomainEntityEventParameters`<`EntityId`, `undefined`\> |

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[constructor](events.classes.basedomainentityevent.md#constructor)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L51)

## Properties

### \_entityType

• `Protected` `Abstract` **\_entityType**: `EntityType`

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[_entityType](events.classes.basedomainentityevent.md#_entitytype)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L51)

___

### \_name

• `Protected` **\_name**: ``"DOMAIN_ENTITY_DELETED"``

#### Overrides

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[_name](events.classes.basedomainentityevent.md#_name)

#### Defined in

[src/events/classes/baseDomainEntityDeleteEvent/baseDomainEntityDeleteEvent.ts:17](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityDeleteEvent/baseDomainEntityDeleteEvent.ts#L17)

___

### eventName

▪ `Static` **eventName**: ``"DOMAIN_ENTITY_DELETED"``

#### Defined in

[src/events/classes/baseDomainEntityDeleteEvent/baseDomainEntityDeleteEvent.ts:16](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityDeleteEvent/baseDomainEntityDeleteEvent.ts#L16)

## Accessors

### entityId

• `get` **entityId**(): `EntityId`

#### Returns

`EntityId`

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:37](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L37)

___

### entityType

• `get` **entityType**(): `EntityType`

#### Returns

`EntityType`

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L41)

___

### eventType

• `get` **eventType**(): `ENTITY_EVENT`

#### Returns

`ENTITY_EVENT`

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:45](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L45)

___

### id

• `get` **id**(): `string`

#### Returns

`string`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:39](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L39)

___

### metaVersion

• `get` **metaVersion**(): `number`

#### Returns

`number`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:31](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L31)

___

### name

• `get` **name**(): `N`

#### Returns

`N`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:27](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L27)

___

### payload

• `get` **payload**(): `P`

#### Returns

`P`

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:35](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L35)

## Methods

### \_getSerializableObjectRepresentation

▸ `Protected` **_getSerializableObjectRepresentation**(): [`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, ``"DOMAIN_ENTITY_DELETED"``, `undefined`, `ENTITY_EVENT`\>

#### Returns

[`IDomainEntityEventPropertiesSerialized`](../interfaces/events.interfaces.idomainentityeventpropertiesserialized.md)<`EntityId`, `EntityType`, ``"DOMAIN_ENTITY_DELETED"``, `undefined`, `ENTITY_EVENT`\>

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[_getSerializableObjectRepresentation](events.classes.basedomainentityevent.md#_getserializableobjectrepresentation)

#### Defined in

[src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts:58](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEntityEvent/baseDomainEntityEvent.ts#L58)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[BaseDomainEntityEvent](events.classes.basedomainentityevent.md).[serialize](events.classes.basedomainentityevent.md#serialize)

#### Defined in

[src/events/classes/baseDomainEvent/baseDomainEvent.ts:71](https://github.com/pashoo2/clean-architecture-boilerplate/blob/4202db5/src/events/classes/baseDomainEvent/baseDomainEvent.ts#L71)
