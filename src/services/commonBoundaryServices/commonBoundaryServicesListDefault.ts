import {ICommonBoundaryServicesList} from '@root/services/commonBoundaryServices/interfaces/commonBoundaryServicesList';
import {serviceGenerateUniqueIdentifier} from './implementations/serviceGenerateUniqueIdentifier';

export const CommonBoundaryServicesListDefault: ICommonBoundaryServicesList = {
  common: {
    generators: {
      generateUniqueIdentifier: serviceGenerateUniqueIdentifier,
    },
  },
};
