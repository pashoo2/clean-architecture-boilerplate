[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](../modules/services.md) / [classes](../modules/services.classes.md) / ServicesContainerResolverBase

# Class: ServicesContainerResolverBase<L\>

[services](../modules/services.md).[classes](../modules/services.classes.md).ServicesContainerResolverBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

## Implements

- `IServicesContainerResolver`<`L`\>

## Table of contents

### Constructors

- [constructor](services.classes.servicescontainerresolverbase.md#constructor)

### Properties

- [\_servicesContainer](services.classes.servicescontainerresolverbase.md#_servicescontainer)
- [\_servicesContainerDefault](services.classes.servicescontainerresolverbase.md#_servicescontainerdefault)

### Methods

- [\_getServicesContainerOrDefaultOrUndefined](services.classes.servicescontainerresolverbase.md#_getservicescontainerordefaultorundefined)
- [getServicesContainer](services.classes.servicescontainerresolverbase.md#getservicescontainer)
- [setServicesContainer](services.classes.servicescontainerresolverbase.md#setservicescontainer)

## Constructors

### constructor

• **new ServicesContainerResolverBase**<`L`\>(`_servicesContainerDefault?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `L` | extends [`TServicesList`](../modules/services.interfaces.common.md#tserviceslist) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `_servicesContainerDefault?` | [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\> |

#### Defined in

[src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts:10](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts#L10)

## Properties

### \_servicesContainer

• `Protected` **\_servicesContainer**: `undefined` \| [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Defined in

[src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts:10](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts#L10)

___

### \_servicesContainerDefault

• `Protected` `Optional` `Readonly` **\_servicesContainerDefault**: [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

## Methods

### \_getServicesContainerOrDefaultOrUndefined

▸ `Protected` **_getServicesContainerOrDefaultOrUndefined**(): `undefined` \| [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Returns

`undefined` \| [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Defined in

[src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts:37](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts#L37)

___

### getServicesContainer

▸ **getServicesContainer**(): [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Returns

[`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\>

#### Implementation of

IServicesContainerResolver.getServicesContainer

#### Defined in

[src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts:16](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts#L16)

___

### setServicesContainer

▸ **setServicesContainer**(`servicesContainer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `servicesContainer` | [`IServicesContainer`](../interfaces/services.interfaces.common.iservicescontainer.md)<`L`\> |

#### Returns

`void`

#### Implementation of

IServicesContainerResolver.setServicesContainer

#### Defined in

[src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts:25](https://github.com/pashoo2/clean-architecture-boilerplate/blob/5d0a725/src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase.ts#L25)
