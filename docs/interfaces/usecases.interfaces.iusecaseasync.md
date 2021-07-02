[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [useCases](../modules/usecases.md) / [interfaces](../modules/usecases.interfaces.md) / IUseCaseAsync

# Interface: IUseCaseAsync<R\>

[useCases](../modules/usecases.md).[interfaces](../modules/usecases.interfaces.md).IUseCaseAsync

## Type parameters

| Name |
| :------ |
| `R` |

## Hierarchy

- [`IUseCaseSync`](usecases.interfaces.iusecasesync.md)<`Promise`<`R`\>\>

  ↳ **`IUseCaseAsync`**

## Callable

### IUseCaseAsync

▸ **IUseCaseAsync**(`parameters`): `Promise`<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

[src/useCases/interfaces/useCasesOuter.ts:5](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/useCases/interfaces/useCasesOuter.ts#L5)

### IUseCaseAsync

▸ **IUseCaseAsync**(`parameters`, `services`): `Promise`<`R`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`IUseCaseParameters`](usecases.interfaces.iusecaseparameters.md) |
| `services` | [`IUseCaseServices`](usecases.interfaces.iusecaseservices.md) |

#### Returns

`Promise`<`R`\>

#### Defined in

[src/useCases/interfaces/useCasesOuter.ts:9](https://github.com/pashoo2/clean-architecture-boilerplate/blob/e54a93c/src/useCases/interfaces/useCasesOuter.ts#L9)
