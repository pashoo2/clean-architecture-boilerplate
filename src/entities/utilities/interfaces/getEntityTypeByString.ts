import {TEntityTypeMain} from '@root/entities/interfaces';

export interface IGetEntityTypeByString<T extends string> {
  (stringValue: T): TEntityTypeMain<T>;
}
