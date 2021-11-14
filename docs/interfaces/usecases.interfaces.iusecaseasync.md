[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [useCases](../modules/usecases.md) / [interfaces](../modules/usecases.interfaces.md) / IUseCaseAsync

# Interface: IUseCaseAsync<R, P, S\>

[useCases](../modules/usecases.md).[interfaces](../modules/usecases.interfaces.md).IUseCaseAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `R` |
| `P` | extends [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |
| `S` | extends [`IUseCaseServices`](usecases.interfaces.iusecaseservices.md) |

## Callable

### IUseCaseAsync

▸ **IUseCaseAsync**(`parameters`, `services`): `Promise`<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `P` |
| `services` | `S` |

#### Returns

`Promise`<`R`\>

#### Defined in

[src/useCases/interfaces/useCasesOuter.ts:25](https://github.com/pashoo2/clean-architecture-boilerplate/blob/741b3a2/src/useCases/interfaces/useCasesOuter.ts#L25)
