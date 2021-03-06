[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [useCases](../modules/usecases.md) / [interfaces](../modules/usecases.interfaces.md) / IUseCaseWithEntitiesConstructorsAsync

# Interface: IUseCaseWithEntitiesConstructorsAsync<R, T\>

[useCases](../modules/usecases.md).[interfaces](../modules/usecases.interfaces.md).IUseCaseWithEntitiesConstructorsAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `T` | extends [`TEntityTypeMain`](../modules/entities.interfaces.md#tentitytypemain) |

## Hierarchy

- [`IUseCaseWithEntitiesConstructorsSync`](usecases.interfaces.iusecasewithentitiesconstructorssync.md)<`Promise`<`R`\>, `T`\>

  ↳ **`IUseCaseWithEntitiesConstructorsAsync`**

## Callable

### IUseCaseWithEntitiesConstructorsAsync

▸ **IUseCaseWithEntitiesConstructorsAsync**(`parameters`, `services`, `entitiesClasses`): `Promise`<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |
| `services` | [`IUseCaseServices`](usecases.interfaces.iusecaseservices.md) |
| `entitiesClasses` | [`TUseCaseEntitiesClasses`](../modules/usecases.interfaces.md#tusecaseentitiesclasses)<`T`, [`TIdentityValueObject`](../modules/valueobject.interfaces.md#tidentityvalueobject)\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[src/useCases/interfaces/useCasesImplementations.ts:24](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/useCases/interfaces/useCasesImplementations.ts#L24)
