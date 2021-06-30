import {TAggregateTypeMain} from 'src/aggregates/interfaces';

export interface IIsAggregateType {
  (typeValue: any): typeValue is TAggregateTypeMain;
}
