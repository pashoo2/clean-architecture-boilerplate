import {TServicesList} from 'src/services/interfaces/common';
import {IServiceGeneratorIdentifierUnique} from 'src/services/interfaces/domain/generators/identifiers';

export interface ICommonBoundaryServicesList extends TServicesList {
  common: {
    generators: {
      generateUniqueIdentifier: IServiceGeneratorIdentifierUnique;
    };
  };
}
