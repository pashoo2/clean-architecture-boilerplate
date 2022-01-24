import { TEntityTypeMain } from '../../../entities/interfaces';
export declare function getEntityTypeByString<T extends string | String>(stringValue: T): TEntityTypeMain<T extends string ? T : ReturnType<T['toString']>>;
