export interface IComparable<V extends any> {
    equalsTo(anotherValue: V): boolean;
}
export interface IComparableAsync<V extends any> {
    equalsTo(anotherValue: V): Promise<boolean>;
}
