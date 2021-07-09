[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [useCases](../modules/usecases.md) / [interfaces](../modules/usecases.interfaces.md) / IUseCaseSync

# Interface: IUseCaseSync<R\>

[useCases](../modules/usecases.md).[interfaces](../modules/usecases.interfaces.md).IUseCaseSync

## Type parameters

| Name |
| :------ |
| `R` |

## Hierarchy

- **`IUseCaseSync`**

  ↳ [`IUseCaseAsync`](usecases.interfaces.iusecaseasync.md)

## Callable

### IUseCaseSync

▸ **IUseCaseSync**(`parameters`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |

#### Returns

`R`

#### Defined in

[src/useCases/interfaces/useCasesOuter.ts:5](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/useCases/interfaces/useCasesOuter.ts#L5)

### IUseCaseSync

▸ **IUseCaseSync**(`parameters`, `services`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |
| `services` | [`IUseCaseServices`](usecases.interfaces.iusecaseservices.md) |

#### Returns

`R`

#### Defined in

[src/useCases/interfaces/useCasesOuter.ts:9](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/useCases/interfaces/useCasesOuter.ts#L9)
