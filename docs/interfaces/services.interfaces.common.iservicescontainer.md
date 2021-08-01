[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](../modules/services.md) / [interfaces](../modules/services.interfaces.md) / [common](../modules/services.interfaces.common.md) / IServicesContainer

# Interface: IServicesContainer<L\>

[interfaces](../modules/services.interfaces.md).[common](../modules/services.interfaces.common.md).IServicesContainer

## Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

## Implemented by

- [`ServicesContainerAbstractClass`](../classes/services.interfaces.common.servicescontainerabstractclass.md)
- [`ServicesContainerBase`](../classes/services.classes.servicescontainerbase.md)

## Table of contents

### Methods

- [getBoundaryServices](services.interfaces.common.iservicescontainer.md#getboundaryservices)
- [getServices](services.interfaces.common.iservicescontainer.md#getservices)
- [registerServices](services.interfaces.common.iservicescontainer.md#registerservices)

## Methods

### getBoundaryServices

▸ **getBoundaryServices**<`B`\>(`boundaryName`): `L`[`B`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `B` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `boundaryName` | `B` |

#### Returns

`L`[`B`]

#### Defined in

[src/services/interfaces/common/servicesContainer.ts:7](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/interfaces/common/servicesContainer.ts#L7)

___

### getServices

▸ **getServices**(): `L`

#### Returns

`L`

#### Defined in

[src/services/interfaces/common/servicesContainer.ts:6](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/interfaces/common/servicesContainer.ts#L6)

___

### registerServices

▸ **registerServices**(`services`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `services` | `DeepPartial`<`L`\> |

#### Returns

`void`

#### Defined in

[src/services/interfaces/common/servicesContainer.ts:5](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/interfaces/common/servicesContainer.ts#L5)
