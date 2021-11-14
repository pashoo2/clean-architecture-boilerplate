[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [useCases](../modules/usecases.md) / [interfaces](../modules/usecases.interfaces.md) / IUseCaseSync

# Interface: IUseCaseSync<R, P, S\>

[useCases](../modules/usecases.md).[interfaces](../modules/usecases.interfaces.md).IUseCaseSync

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `P` | extends [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |
| `S` | extends [`IUseCaseServices`](usecases.interfaces.iusecaseservices.md)[`IUseCaseServices`](usecases.interfaces.iusecaseservices.md) |

## Callable

### IUseCaseSync

▸ **IUseCaseSync**(`parameters`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `P` |

#### Returns

`R`

#### Defined in

[src/useCases/interfaces/useCasesOuter.ts:9](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/useCases/interfaces/useCasesOuter.ts#L9)

### IUseCaseSync

▸ **IUseCaseSync**(`parameters`, `services`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `P` |
| `services` | `S` |

#### Returns

`R`

#### Defined in

[src/useCases/interfaces/useCasesOuter.ts:17](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/useCases/interfaces/useCasesOuter.ts#L17)
