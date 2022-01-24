import { TAggregateTypeMain } from '../../../aggregates/interfaces';
export interface IIsAggregateType {
    (typeValue: any): typeValue is TAggregateTypeMain;
}
