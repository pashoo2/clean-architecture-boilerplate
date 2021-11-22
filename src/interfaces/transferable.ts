import {TPickReadOnlyProperties} from './common';
import {TPropertySerializable, TSerializableSimple} from './serialization';

export type TPickTransferableProperties<C extends Object> = {
  [K in TPickReadOnlyProperties<C>]: C[K] extends
    | TPropertySerializable
    | ITransferable
    | TSerializableSimple
    ? C[K]
    : C[K] extends {}
    ? TPickTransferableProperties<C[K]>
    : never;
};

export interface ITransferable {
  getTransferableProps(): Readonly<TPickTransferableProperties<this>>;
}
