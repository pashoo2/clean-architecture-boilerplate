[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRootClassFabricParameters

# Interface: IAggregateRootClassFabricParameters<Id, Type, E\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRootClassFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |

## Table of contents

### Properties

- [compareEntitiesIdentities](aggregates.interfaces.iaggregaterootclassfabricparameters.md#compareentitiesidentities)
- [compareEntitiesTypes](aggregates.interfaces.iaggregaterootclassfabricparameters.md#compareentitiestypes)
- [getTransferableProps](aggregates.interfaces.iaggregaterootclassfabricparameters.md#gettransferableprops)
- [services](aggregates.interfaces.iaggregaterootclassfabricparameters.md#services)
- [type](aggregates.interfaces.iaggregaterootclassfabricparameters.md#type)
- [validateInstance](aggregates.interfaces.iaggregaterootclassfabricparameters.md#validateinstance)

## Properties

### compareEntitiesIdentities

• **compareEntitiesIdentities**: [`ICompareEntitiesIdentities`](entities.utilities.interfaces.icompareentitiesidentities.md)<`Id`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:41](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/interfaces/aggregateRootFabric.ts#L41)

___

### compareEntitiesTypes

• **compareEntitiesTypes**: [`ICompareEntitiesTypes`](entities.utilities.interfaces.icompareentitiestypes.md)<`Type`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:40](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/interfaces/aggregateRootFabric.ts#L40)

___

### getTransferableProps

• **getTransferableProps**: [`IGetTransferablePropertiesOfAggregateRoot`](aggregates.interfaces.igettransferablepropertiesofaggregateroot.md)<`Id`, `Type`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:39](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/interfaces/aggregateRootFabric.ts#L39)

___

### services

• **services**: [`IBaseAggregateRootServices`](aggregates.interfaces.ibaseaggregaterootservices.md)<`E`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:37](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/interfaces/aggregateRootFabric.ts#L37)

___

### type

• **type**: `Type`

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:36](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/interfaces/aggregateRootFabric.ts#L36)

___

### validateInstance

• **validateInstance**: [`IValidateAggregate`](aggregates.interfaces.ivalidateaggregate.md)<`Id`, `Type`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:38](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/aggregates/interfaces/aggregateRootFabric.ts#L38)
