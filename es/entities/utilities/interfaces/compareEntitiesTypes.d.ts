export interface ICompareEntitiesTypes<T extends string> {
    (firstEntityType: T, secondEntityType: T): boolean;
}
