import { TSerializableSimple } from '../../../../interfaces/serialization';
import { TPickTransferableProperties } from '../../../../interfaces/transferable';
export declare function convertTransferableToSerializableAsync<O extends Object, TO extends TPickTransferableProperties<O>, R extends Record<keyof TO, TSerializableSimple>>(objectTransferable: TO): Promise<R>;
