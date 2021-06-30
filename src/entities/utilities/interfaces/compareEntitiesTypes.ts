import {TEntityTypeMain} from 'src/entities/interfaces';

export interface ICompareEntitiesTypes {
  (firstEntityType: TEntityTypeMain, secondEntityType: TEntityTypeMain): boolean;
}
