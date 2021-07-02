import {TAggregateTypeMain} from '@root/aggregates/interfaces';

export interface IIsAggregateType {
  (typeValue: any): typeValue is TAggregateTypeMain;
}
