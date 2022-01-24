/**
 * https://github.com/voodoocreation/ts-deepmerge/blob/master/src/index.ts
 */
interface IObject {
    [key: string]: any;
}
declare type TUnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export declare const mergeDeep: <T extends IObject[]>(...objects: T) => TUnionToIntersection<T[number]>;
export {};
