import {TServicesList} from '@root/services/interfaces/common';
import {IServiceGeneratorIdentifierUnique} from '@root/services/interfaces/domain/generators/identifiers';

export interface ICommonBoundaryServicesList extends TServicesList {
  common: {
    generators: {
      generateUniqueIdentifier: IServiceGeneratorIdentifierUnique;
    };
  };
}
