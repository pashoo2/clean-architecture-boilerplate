import {CommonBoundaryServicesListDefault} from './commonBoundaryServicesListDefault';
import {ServicesContainerBase} from '@root/services/classes';
import {ICommonBoundaryServicesList} from './interfaces/commonBoundaryServicesList';

export const commonBoundaryServicesContainerDefault =
  new ServicesContainerBase<ICommonBoundaryServicesList>(
    CommonBoundaryServicesListDefault
  );
