import {IServiceAggregate} from '@root/services/interfaces/common';
import {IServiceGeneratorIdentifierUnique} from '@root/services/interfaces/domain/generators/identifiers';

export interface IDomainCommonServicesGenerators extends IServiceAggregate {
  generateUniqueIdentifier: IServiceGeneratorIdentifierUnique;
}
