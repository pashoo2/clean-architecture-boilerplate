import {
  ISerializable,
  ISerializableAsync,
  TSerializableSimple,
} from '@root/interfaces/serialization';
import {TSimpleType} from '@root/interfaces/common';
import {
  ITransferable,
  TPickTransferableProperties,
} from '@root/interfaces/transferable';
import {isSimpleTypeOrArrayOrObject} from '../../typeGuards/isSimpleTypeOrArrayOrObject';

export async function convertTransferableToSerializableAsync<
  O extends Object,
  TO extends TPickTransferableProperties<O>,
  R extends Record<keyof TO, TSerializableSimple>
>(objectTransferable: TO): Promise<R> {
  const serializableValues = {} as R;
  await Promise.all(
    Object.keys(objectTransferable).map(async (propertyName): Promise<void> => {
      // TODO - there is an error if this hack is not used
      let value = undefined;
      const key = propertyName as keyof TO;

      value = objectTransferable[key];
      if (isSimpleTypeOrArrayOrObject(value) || value instanceof Date) {
        serializableValues[key] = value as TSerializableSimple as R[keyof TO];
        return;
      }
      if (
        typeof (value as ISerializable<TSimpleType>).serialize === 'function'
      ) {
        const serializationResult = await (
          value as ISerializable<TSimpleType> | ISerializableAsync<TSimpleType>
        ).serialize();
        serializableValues[key] =
          serializationResult as TSerializableSimple as R[keyof TO];
        return;
      }
      if (
        typeof value === 'object' &&
        typeof (value as ITransferable).getTransferableProps === 'function'
      ) {
        serializableValues[key] = (await convertTransferableToSerializableAsync(
          (value as ITransferable).getTransferableProps()
        )) as TSerializableSimple as R[keyof TO];
        return;
      }
      serializableValues[key] = value.toString() as R[keyof TO];
    })
  );
  return serializableValues;
}
