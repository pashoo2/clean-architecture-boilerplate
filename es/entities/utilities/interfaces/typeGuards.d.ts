import { TEntityTypeMain } from '../../../entities/interfaces';
export interface IIsEntityType {
    (typeValue: any): typeValue is TEntityTypeMain;
}
