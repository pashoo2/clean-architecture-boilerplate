import { TAggregateTypeMain } from '../../../aggregates/interfaces';
export declare function getAggregateTypeByString<T extends string | String>(stringValue: T): TAggregateTypeMain<T extends string ? T : ReturnType<T['toString']>>;
