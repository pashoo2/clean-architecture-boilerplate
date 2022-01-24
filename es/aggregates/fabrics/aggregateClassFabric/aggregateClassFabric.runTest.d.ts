import { TAggregateTestClassEventsList } from '../../../aggregates/abstractClasses/aggregateRootAbstractClass.test';
import { IAggregateRootClassFabric, TAggregateTypeMain } from '../../../aggregates/interfaces';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function runTestsForAggregateClassFabric(aggregateClassFabric: IAggregateRootClassFabric<TIdentityValueObject, TAggregateTypeMain, TAggregateTestClassEventsList>, testName?: string): void;
