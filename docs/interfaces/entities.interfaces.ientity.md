[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](../modules/entities.md) / [interfaces](../modules/entities.interfaces.md) / IEntity

# Interface: IEntity<Id, Type\>

[entities](../modules/entities.md).[interfaces](../modules/entities.interfaces.md).IEntity

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |

## Hierarchy

- **`IEntity`**

  ↳ [`IAggregateRoot`](aggregates.interfaces.iaggregateroot.md)

  ↳ [`IEntityImplementation`](entities.interfaces.ientityimplementation.md)

## Table of contents

### Properties

- [id](entities.interfaces.ientity.md#id)
- [isDeleted](entities.interfaces.ientity.md#isdeleted)
- [type](entities.interfaces.ientity.md#type)

## Properties

### id

• `Readonly` **id**: `Id`

#### Defined in

[src/entities/interfaces/entity.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L18)

___

### isDeleted

• `Readonly` **isDeleted**: `boolean`

#### Defined in

[src/entities/interfaces/entity.ts:20](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L20)

___

### type

• `Readonly` **type**: `Type`

#### Defined in

[src/entities/interfaces/entity.ts:19](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/entities/interfaces/entity.ts#L19)
