import {TSerializableSimple} from '@root/interfaces/serialization';
import {TPickTransferableProperties} from '@root/interfaces/transferable';

export interface IConvertTransferableToSerializable<
  O extends Object,
  TO extends TPickTransferableProperties<O>,
  R extends Record<keyof TO, TSerializableSimple>
> {
  (objectTransferable: TO): R;
}

export interface IConvertTransferableToSerializableAsync<
  O extends Object,
  TO extends TPickTransferableProperties<O>,
  R extends Record<keyof TO, TSerializableSimple>
> extends IConvertTransferableToSerializable<O, TO, R> {}
