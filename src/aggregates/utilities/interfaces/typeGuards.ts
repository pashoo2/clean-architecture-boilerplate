import {TAggregateType} from 'src/aggregates/interfaces';

export interface IIsAggregateType {
  (typeValue: any): typeValue is TAggregateType;
}
