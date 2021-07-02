import {TEntityTypeMain} from '@root/entities/interfaces';

export interface IIsEntityType {
  (typeValue: any): typeValue is TEntityTypeMain;
}
