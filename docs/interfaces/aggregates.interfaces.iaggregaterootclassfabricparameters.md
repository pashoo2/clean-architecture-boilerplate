[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](../modules/aggregates.md) / [interfaces](../modules/aggregates.interfaces.md) / IAggregateRootClassFabricParameters

# Interface: IAggregateRootClassFabricParameters<Id, Type, E, Instance\>

[aggregates](../modules/aggregates.md).[interfaces](../modules/aggregates.interfaces.md).IAggregateRootClassFabricParameters

## Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends `string` |
| `E` | extends [`IBaseAggregateRootEventsList`](aggregates.interfaces.ibaseaggregaterooteventslist.md)<`Id`, `Type`\> |
| `Instance` | extends [`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`Id`, `Type`, `E`\>[`TAggregateRootImplementation`](../modules/aggregates.interfaces.md#taggregaterootimplementation)<`Id`, `Type`, `E`\> |

## Table of contents

### Properties

- [compareEntitiesIdentities](aggregates.interfaces.iaggregaterootclassfabricparameters.md#compareentitiesidentities)
- [compareEntitiesTypes](aggregates.interfaces.iaggregaterootclassfabricparameters.md#compareentitiestypes)
- [getServices](aggregates.interfaces.iaggregaterootclassfabricparameters.md#getservices)
- [getTransferableProps](aggregates.interfaces.iaggregaterootclassfabricparameters.md#gettransferableprops)
- [type](aggregates.interfaces.iaggregaterootclassfabricparameters.md#type)
- [validateInstance](aggregates.interfaces.iaggregaterootclassfabricparameters.md#validateinstance)

## Properties

### compareEntitiesIdentities

• **compareEntitiesIdentities**: [`ICompareEntitiesIdentities`](entities.utilities.interfaces.icompareentitiesidentities.md)<`Id`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:60](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L60)

___

### compareEntitiesTypes

• **compareEntitiesTypes**: [`ICompareEntitiesTypes`](entities.utilities.interfaces.icompareentitiestypes.md)<`Type`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:59](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L59)

___

### getServices

• **getServices**: () => [`IBaseAggregateRootServices`](aggregates.interfaces.ibaseaggregaterootservices.md)<`E`\>

#### Type declaration

▸ (): [`IBaseAggregateRootServices`](aggregates.interfaces.ibaseaggregaterootservices.md)<`E`\>

##### Returns

[`IBaseAggregateRootServices`](aggregates.interfaces.ibaseaggregaterootservices.md)<`E`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:52](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L52)

___

### getTransferableProps

• **getTransferableProps**: [`IGetTransferablePropertiesOfAggregateRoot`](aggregates.interfaces.igettransferablepropertiesofaggregateroot.md)<`Id`, `Type`, `Instance`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:54](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L54)

___

### type

• **type**: `Type`

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:51](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L51)

___

### validateInstance

• **validateInstance**: [`IValidateAggregate`](aggregates.interfaces.ivalidateaggregate.md)<`Id`, `Type`, `Instance`\>

#### Defined in

[src/aggregates/interfaces/aggregateRootFabric.ts:53](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/aggregates/interfaces/aggregateRootFabric.ts#L53)
