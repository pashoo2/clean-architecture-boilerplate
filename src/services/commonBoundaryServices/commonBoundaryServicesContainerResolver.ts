import {ServicesContainerResolverBase} from 'src/services/classes';
import {commonBoundaryServicesContainerDefault} from './commonBoundaryServicesContainerDefault';
import {ICommonBoundaryServicesList} from './interfaces/commonBoundaryServicesList';

export const commonBoundaryServicesContainerResolver =
  new ServicesContainerResolverBase<ICommonBoundaryServicesList>(
    commonBoundaryServicesContainerDefault
  );
