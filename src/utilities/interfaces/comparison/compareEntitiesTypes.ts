import {TEntityType} from 'src/entities/interfaces';

export interface ICompareEntitiesTypes {
  (firstEntityType: TEntityType, secondEntityType: TEntityType): boolean;
}
