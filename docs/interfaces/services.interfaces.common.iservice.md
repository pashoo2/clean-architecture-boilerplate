[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [services](../modules/services.md) / [interfaces](../modules/services.interfaces.md) / [common](../modules/services.interfaces.common.md) / IService

# Interface: IService<R\>

[interfaces](../modules/services.interfaces.md).[common](../modules/services.interfaces.common.md).IService

## Type parameters

| Name |
| :------ |
| `R` |

## Hierarchy

- `Function`

  ↳ **`IService`**

## Callable

### IService

▸ **IService**(...`args`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `unknown`[] |

#### Returns

`R`

#### Defined in

[src/services/interfaces/common/service.ts:1](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/services/interfaces/common/service.ts#L1)

### IService

▸ **IService**(): `R`

#### Returns

`R`

#### Defined in

[src/services/interfaces/common/service.ts:2](https://github.com/pashoo2/clean-architecture-boilerplate/blob/88f8e3d/src/services/interfaces/common/service.ts#L2)

## Table of contents

### Properties

- [arguments](services.interfaces.common.iservice.md#arguments)
- [caller](services.interfaces.common.iservice.md#caller)
- [length](services.interfaces.common.iservice.md#length)
- [name](services.interfaces.common.iservice.md#name)
- [prototype](services.interfaces.common.iservice.md#prototype)

### Methods

- [[hasInstance]](services.interfaces.common.iservice.md#[hasinstance])
- [apply](services.interfaces.common.iservice.md#apply)
- [bind](services.interfaces.common.iservice.md#bind)
- [call](services.interfaces.common.iservice.md#call)
- [toString](services.interfaces.common.iservice.md#tostring)

## Properties

### arguments

• **arguments**: `any`

#### Inherited from

Function.arguments

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:302

___

### caller

• **caller**: `Function`

#### Inherited from

Function.caller

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:303

___

### length

• `Readonly` **length**: `number`

#### Inherited from

Function.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:299

___

### name

• `Readonly` **name**: `string`

Returns the name of the function. Function names are read-only and can not be changed.

#### Inherited from

Function.name

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

### prototype

• **prototype**: `any`

#### Inherited from

Function.prototype

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:298

## Methods

### [hasInstance]

▸ **[hasInstance]**(`value`): `boolean`

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Inherited from

Function.\_\_@hasInstance@73

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:162

___

### apply

▸ **apply**(`thisArg`, `argArray?`): `any`

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thisArg` | `any` | The object to be used as the this object. |
| `argArray?` | `any` | A set of arguments to be passed to the function. |

#### Returns

`any`

#### Inherited from

Function.apply

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:278

___

### bind

▸ **bind**(`thisArg`, ...`argArray`): `any`

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thisArg` | `any` | An object to which the this keyword can refer inside the new function. |
| `...argArray` | `any`[] | A list of arguments to be passed to the new function. |

#### Returns

`any`

#### Inherited from

Function.bind

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:293

___

### call

▸ **call**(`thisArg`, ...`argArray`): `any`

Calls a method of an object, substituting another object for the current object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thisArg` | `any` | The object to be used as the current object. |
| `...argArray` | `any`[] | A list of arguments to be passed to the method. |

#### Returns

`any`

#### Inherited from

Function.call

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:285

___

### toString

▸ **toString**(): `string`

Returns a string representation of a function.

#### Returns

`string`

#### Inherited from

Function.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:296
