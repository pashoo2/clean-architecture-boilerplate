[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [aggregates](aggregates.md) / interfaces

# Namespace: interfaces

[aggregates](aggregates.md).interfaces

## Table of contents

### Interfaces

- [IAggregateRoot](../interfaces/aggregates.interfaces.iaggregateroot.md)
- [IAggregateRootClassFabric](../interfaces/aggregates.interfaces.iaggregaterootclassfabric.md)
- [IAggregateRootClassFabricParameters](../interfaces/aggregates.interfaces.iaggregaterootclassfabricparameters.md)
- [IAggregateRootImplementation](../interfaces/aggregates.interfaces.iaggregaterootimplementation.md)
- [IBaseAggregateRootEventsList](../interfaces/aggregates.interfaces.ibaseaggregaterooteventslist.md)
- [IBaseAggregateRootParameters](../interfaces/aggregates.interfaces.ibaseaggregaterootparameters.md)
- [IBaseAggregateRootServices](../interfaces/aggregates.interfaces.ibaseaggregaterootservices.md)
- [IGetTransferablePropertiesOfAggregateRoot](../interfaces/aggregates.interfaces.igettransferablepropertiesofaggregateroot.md)
- [IValidateAggregate](../interfaces/aggregates.interfaces.ivalidateaggregate.md)

### Type aliases

- [TAggregateTypeMain](aggregates.interfaces.md#taggregatetypemain)

## Type aliases

### TAggregateTypeMain

Ƭ **TAggregateTypeMain**<`T`\>: \`${typeof AGGREGATE\_TYPE\_PREFIX}\_\_${T}\`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string``string` |

#### Defined in

[src/aggregates/interfaces/aggregateRoot.ts:11](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e82048b/src/aggregates/interfaces/aggregateRoot.ts#L11)
