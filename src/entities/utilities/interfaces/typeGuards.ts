import {TEntityTypeMain} from 'src/entities/interfaces';

export interface IIsEntityType {
  (typeValue: any): typeValue is TEntityTypeMain;
}
