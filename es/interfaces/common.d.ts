export declare type TSimpleType = boolean | string | number | null | undefined | String | Number;
export declare type TSimpleArray = Array<TSimpleType | TSimpleObject>;
export declare type TSimpleObject = Partial<{
    [key: string]: TSimpleType | TSimpleObject | TSimpleArray;
    [key: number]: TSimpleType | TSimpleObject | TSimpleArray;
}>;
export declare type OmitByValueType<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: T[Key] extends ValueType ? never : Key;
}[keyof T]>;
export declare type PickByValueType<T, ValueType> = Pick<T, {
    [Key in keyof T]-?: T[Key] extends ValueType ? Key : never;
}[keyof T]>;
declare type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? A : B;
export declare type WritableKeys<T> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, P>;
}[keyof T];
declare type ReadonlyKeys<T> = {
    [P in keyof T]-?: IfEquals<{
        [Q in P]: T[P];
    }, {
        -readonly [Q in P]: T[P];
    }, never, P>;
}[keyof T];
export declare type TPickReadOnlyProperties<C extends Object> = ReadonlyKeys<OmitByValueType<C, Function>>;
export declare type OmitNeverProps<C extends Object> = {
    [K in {
        [P in keyof C]-?: C[P] extends never ? never : P;
    }[keyof C]]: C[K];
};
export declare type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
export declare type ValueOf<O extends Object> = O[keyof O];
export declare type TSimpleObjectValuesType<O extends Object> = ValueOf<O> extends TSimpleType ? ValueOf<O> : never;
export declare type TNotSimpleObjectValuesType<O extends Object> = Exclude<ValueOf<O>, TSimpleObjectValuesType<O> | Function>;
export declare type TMakeTargetUndefined<CheckValue, TargetValue> = CheckValue extends undefined ? TargetValue | undefined : TargetValue;
export declare type TMakeTargetNull<CheckValue, TargetValue> = CheckValue extends null ? TargetValue | null : TargetValue;
export declare type TMakeTargetNullOrUndefined<CheckValue, TargetValue> = TMakeTargetNull<CheckValue, TMakeTargetUndefined<CheckValue, TargetValue>>;
export declare type TMergeProperties<Main, Additional> = Main & Pick<Additional, Exclude<keyof Additional, keyof Main>>;
export {};
