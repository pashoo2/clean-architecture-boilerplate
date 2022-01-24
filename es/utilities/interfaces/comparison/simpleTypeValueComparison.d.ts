import { TSimpleType } from '../../../interfaces/common';
export interface ICompareSimpleTypeValues<V1 extends TSimpleType, V2 extends TSimpleType> {
    (v1: V1, v2: V2): boolean;
}
