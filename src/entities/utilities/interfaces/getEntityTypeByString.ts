import {TEntityTypeMain} from 'src/entities/interfaces';

export interface IGetEntityTypeByString<T extends string> {
  (stringValue: T): TEntityTypeMain<T>;
}
