import {TEntityType} from 'src/entities/interfaces';

export interface IGetEntityTypeByString<T extends string> {
  (stringValue: T): TEntityType<T>;
}
