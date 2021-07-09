import {aggregateClassFabric} from '@root/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric';
import {runTestsForAggregateClassFabric} from '@root/aggregates/fabrics/aggregateClassFabric/aggregateClassFabric.runTest';

describe('aggregateClassFabric', () => {
  runTestsForAggregateClassFabric(aggregateClassFabric);
});
