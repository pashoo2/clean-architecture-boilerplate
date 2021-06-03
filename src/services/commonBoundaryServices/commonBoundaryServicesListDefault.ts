import {ICommonBoundaryServicesList} from 'src/services/commonBoundaryServices/interfaces/commonBoundaryServicesList';
import {serviceGenerateUniqueIdentifier} from './implementations/serviceGenerateUniqueIdentifier';

export const CommonBoundaryServicesListDefault: ICommonBoundaryServicesList = {
  common: {
    generators: {
      generateUniqueIdentifier: serviceGenerateUniqueIdentifier,
    },
  },
};
