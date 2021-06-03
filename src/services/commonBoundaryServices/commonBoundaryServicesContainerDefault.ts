import {CommonBoundaryServicesListDefault} from './commonBoundaryServicesListDefault';
import {ServicesContainerBase} from 'src/services/classes';
import {ICommonBoundaryServicesList} from './interfaces/commonBoundaryServicesList';

export const commonBoundaryServicesContainerDefault =
  new ServicesContainerBase<ICommonBoundaryServicesList>(
    CommonBoundaryServicesListDefault
  );
