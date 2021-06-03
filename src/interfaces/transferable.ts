import {TPickReadOnlyProperties} from './common';
import {TPropertySerializable} from './serialization';

export type TPickTransferableProperties<C extends Object> = {
  [K in TPickReadOnlyProperties<C>]:
    | TPropertySerializable
    | TPickTransferableProperties<C[K]>
    | ITransferable;
};

export interface ITransferable {
  getTransferableProps(): Readonly<TPickTransferableProperties<this>>;
}
