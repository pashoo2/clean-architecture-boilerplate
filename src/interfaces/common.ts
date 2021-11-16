export type TSimpleType =
  | boolean
  | string
  | number
  | null
  | undefined
  | String
  | Number;

export type TSimpleArray = Array<TSimpleType | TSimpleObject>;

export type TSimpleObject = Partial<{
  [key: string]: TSimpleType | TSimpleObject | TSimpleArray;
  [key: number]: TSimpleType | TSimpleObject | TSimpleArray;
}>;

// https://github.com/piotrwitek/utility-types/blob/df2502ef504c4ba8bd9de81a45baef112b7921d0/src/mapped-types.ts#L257
export type OmitByValueType<T, ValueType> = Pick<
  T,
  {[Key in keyof T]-?: T[Key] extends ValueType ? never : Key}[keyof T]
>;

export type PickByValueType<T, ValueType> = Pick<
  T,
  {[Key in keyof T]-?: T[Key] extends ValueType ? Key : never}[keyof T]
>;

// https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript/52473108#52473108

type IfEquals<X, Y, A = X, B = never> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? A
  : B;

// https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript/52473108#52473108
export type WritableKeys<T> = {
  [P in keyof T]-?: IfEquals<{[Q in P]: T[P]}, {-readonly [Q in P]: T[P]}, P>;
}[keyof T];

// https://stackoverflow.com/questions/52443276/how-to-exclude-getter-only-properties-from-type-in-typescript/52473108#52473108
type ReadonlyKeys<T> = {
  [P in keyof T]-?: IfEquals<
    {[Q in P]: T[P]},
    {-readonly [Q in P]: T[P]},
    never,
    P
  >;
}[keyof T];

export type TPickReadOnlyProperties<C extends Object> = ReadonlyKeys<
  OmitByValueType<C, Function>
>;

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type ValueOf<O extends Object> = O[keyof O];

export type TSimpleObjectValuesType<O extends Object> =
  ValueOf<O> extends TSimpleType ? ValueOf<O> : never;

export type TNotSimpleObjectValuesType<O extends Object> = Exclude<
  ValueOf<O>,
  TSimpleObjectValuesType<O> | Function
>;

export type TMakeTargetUndefined<CheckValue, TargetValue> =
  CheckValue extends undefined ? TargetValue | undefined : TargetValue;

export type TMakeTargetNull<CheckValue, TargetValue> = CheckValue extends null
  ? TargetValue | null
  : TargetValue;

export type TMakeTargetNullOrUndefined<CheckValue, TargetValue> =
  TMakeTargetNull<CheckValue, TMakeTargetUndefined<CheckValue, TargetValue>>;

export type TMergeProperties<Main, Additional> = Main &
  Pick<Additional, Exclude<keyof Additional, keyof Main>>;
