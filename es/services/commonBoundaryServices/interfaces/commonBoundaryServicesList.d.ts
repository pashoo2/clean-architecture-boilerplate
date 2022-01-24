import { TServicesList } from '../../../services/interfaces/common';
import { IServiceGeneratorIdentifierUnique } from '../../../services/interfaces/domain/generators/identifiers';
export interface ICommonBoundaryServicesList extends TServicesList {
    common: {
        generators: {
            generateUniqueIdentifier: IServiceGeneratorIdentifierUnique;
        };
    };
}
