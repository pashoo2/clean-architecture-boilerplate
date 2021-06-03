import {IServiceAggregate} from 'src/services/interfaces/common';
import {IServiceGeneratorIdentifierUnique} from 'src/services/interfaces/domain/generators/identifiers';

export interface IDomainCommonServicesGenerators extends IServiceAggregate {
  generateUniqueIdentifier: IServiceGeneratorIdentifierUnique;
}
