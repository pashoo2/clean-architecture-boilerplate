[@pashoo2/clean-architecture-boilerplate](../README.md) / [Exports](../modules.md) / [utilities](../modules/utilities.md) / [interfaces](../modules/utilities.interfaces.md) / IConvertTransferableToSerializableAsync

# Interface: IConvertTransferableToSerializableAsync<O, TO, R\>

[utilities](../modules/utilities.md).[interfaces](../modules/utilities.interfaces.md).IConvertTransferableToSerializableAsync

## Type parameters

| Name | Type |
| :------ | :------ |
| `O` | extends `Object` |
| `TO` | extends `TPickTransferableProperties`<`O`\> |
| `R` | extends `Record`<keyof `TO`, `TSerializableSimple`\> |

## Hierarchy

- [`IConvertTransferableToSerializable`](utilities.interfaces.iconverttransferabletoserializable.md)<`O`, `TO`, `R`\>

  ↳ **`IConvertTransferableToSerializableAsync`**

## Callable

### IConvertTransferableToSerializableAsync

▸ **IConvertTransferableToSerializableAsync**(`objectTransferable`): `R`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectTransferable` | `TO` |

#### Returns

`R`

#### Defined in

[src/utilities/interfaces/serialization/convertTransferableToSerializable.ts:8](https://github.com/pashoo2/clean-architecture-boilerplate/blob/914ff8c/src/utilities/interfaces/serialization/convertTransferableToSerializable.ts#L8)
