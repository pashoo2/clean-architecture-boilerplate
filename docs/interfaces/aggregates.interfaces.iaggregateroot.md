[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRoot

# Interface: IAggregateRoot<Id, Type\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRoot

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |

## Hierarchy

- [`IEntity`](entities.interfaces.ientity.md)<`Id`, `Type`\>

  ↳ **`IAggregateRoot`**

  ↳↳ [`IAggregateRootImplementation`](aggregates.interfaces.iaggregaterootimplementation.md)

## Table of contents

### Properties

- [id](aggregates.interfaces.iaggregateroot.md#id)
- [isDeleted](aggregates.interfaces.iaggregateroot.md#isdeleted)
- [type](aggregates.interfaces.iaggregateroot.md#type)

## Properties

### id

• `Readonly` **id**: `Id`

#### Inherited from

[IEntity](entities.interfaces.ientity.md).[id](entities.interfaces.ientity.md#id)

#### Defined in

[src/entities/interfaces/entity.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L18)

___

### isDeleted

• `Readonly` **isDeleted**: `boolean`

#### Inherited from

[IEntity](entities.interfaces.ientity.md).[isDeleted](entities.interfaces.ientity.md#isdeleted)

#### Defined in

[src/entities/interfaces/entity.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L20)

___

### type

• `Readonly` **type**: `Type`

#### Inherited from

[IEntity](entities.interfaces.ientity.md).[type](entities.interfaces.ientity.md#type)

#### Defined in

[src/entities/interfaces/entity.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L19)
