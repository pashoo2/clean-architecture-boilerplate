[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [entities](entities.md) / fabrics

# Namespace: fabrics

[entities](entities.md).fabrics

## Table of contents

### Functions

- [entityClassFabric](entities.fabrics.md#entityclassfabric)
- [entityClassFabricWithServices](entities.fabrics.md#entityclassfabricwithservices)
- [entityClassFabricWithServicesAndUtilities](entities.fabrics.md#entityclassfabricwithservicesandutilities)
- [entityClassWithDeleteMethodAndServicesFabric](entities.fabrics.md#entityclasswithdeletemethodandservicesfabric)
- [entityClassWithDeleteMethodFabric](entities.fabrics.md#entityclasswithdeletemethodfabric)
- [entityClassWithDeleteMethodServicesAndUtilitiesFabric](entities.fabrics.md#entityclasswithdeletemethodservicesandutilitiesfabric)

## Functions

### entityClassFabric

▸ **entityClassFabric**<`Id`, `Type`, `E`\>(`parameters`): `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |

#### Returns

`Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Defined in

[src/entities/fabrics/entityClassFabric/entityClassFabric.ts:15](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/fabrics/entityClassFabric/entityClassFabric.ts#L15)

___

### entityClassFabricWithServices

▸ **entityClassFabricWithServices**<`Id`, `Type`, `E`\>(`parameters`, `services`): `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |

#### Returns

`Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

[src/entities/fabrics/entityClassFabricWithServices/entityClassFabricWithServices.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/fabrics/entityClassFabricWithServices/entityClassFabricWithServices.ts#L14)

___

### entityClassFabricWithServicesAndUtilities

▸ **entityClassFabricWithServicesAndUtilities**<`Id`, `Type`, `E`\>(`parameters`, `services`, `utilities`): `Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |
| `utilities` | `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

#### Returns

`Constructor`<[`IEntityImplementation`](../interfaces/entities.interfaces.ientityimplementation.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

[src/entities/fabrics/entityClassFabricWithServicesAndUtilities/entityClassFabricWithServicesAndUtilities.ts:18](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/fabrics/entityClassFabricWithServicesAndUtilities/entityClassFabricWithServicesAndUtilities.ts#L18)

___

### entityClassWithDeleteMethodAndServicesFabric

▸ **entityClassWithDeleteMethodAndServicesFabric**<`Id`, `Type`, `E`\>(`parameters`, `services`): `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |

#### Returns

`Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

[src/entities/fabrics/entityClassWithDeleteMethodAndServicesFabric/entityClassWithDeleteMethodAndServicesFabric.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/fabrics/entityClassWithDeleteMethodAndServicesFabric/entityClassWithDeleteMethodAndServicesFabric.ts#L13)

___

### entityClassWithDeleteMethodFabric

▸ **entityClassWithDeleteMethodFabric**<`Id`, `Type`, `E`\>(`parameters`): `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |

#### Returns

`Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>, [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\>]\>

#### Defined in

[src/entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.ts:13](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/fabrics/entityClassWithDeleteMethodFabric/entityClassWithDeleteMethodFabric.ts#L13)

___

### entityClassWithDeleteMethodServicesAndUtilitiesFabric

▸ **entityClassWithDeleteMethodServicesAndUtilitiesFabric**<`Id`, `Type`, `E`\>(`parameters`, `services`, `utilities`): `Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Id` | extends [`TIdentityValueObject`](valueobject.interfaces.md#tidentityvalueobject) |
| `Type` | extends \`entity\_\_\_\_${string}\` |
| `E` | extends [`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`, `E`\>[`IBaseEntityEventsList`](../interfaces/entities.interfaces.ibaseentityeventslist.md)<`Id`, `Type`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IEntityFabricParameters`](../interfaces/entities.interfaces.ientityfabricparameters.md)<`Id`, `Type`\> |
| `services` | [`IBaseEntityServices`](../interfaces/entities.interfaces.ibaseentityservices.md)<`E`\> |
| `utilities` | `IBaseEntityAbstractClassImplementationUtitlities`<`Id`, `Type`\> |

#### Returns

`Constructor`<[`IEntityImplementationWithDeleteMethod`](../interfaces/entities.interfaces.ientityimplementationwithdeletemethod.md)<`Id`, `Type`, `E`\>, [[`IBaseEntityParameters`](../interfaces/entities.interfaces.ibaseentityparameters.md)<`Id`\>]\>

#### Defined in

[src/entities/fabrics/entityClassWithDeleteMethodServicesAndUtilitiesFabric/entityClassWithDeleteMethodServicesAndUtilitiesFabric.ts:14](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/entities/fabrics/entityClassWithDeleteMethodServicesAndUtilitiesFabric/entityClassWithDeleteMethodServicesAndUtilitiesFabric.ts#L14)
