import { IServiceAggregate } from '../../../../services/interfaces/common';
import { IServiceGeneratorIdentifierUnique } from '../../../../services/interfaces/domain/generators/identifiers';
export interface IDomainCommonServicesGenerators extends IServiceAggregate {
    generateUniqueIdentifier: IServiceGeneratorIdentifierUnique;
}
