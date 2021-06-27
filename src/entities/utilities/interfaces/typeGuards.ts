import {TEntityType} from 'src/entities/interfaces';

export interface IIsEntityType {
  (typeValue: any): typeValue is TEntityType;
}
