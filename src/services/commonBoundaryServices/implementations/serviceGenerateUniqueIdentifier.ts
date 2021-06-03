import {IServiceGeneratorIdentifierUnique} from 'src/services/interfaces/domain/generators/identifiers';

let currentIndex = 0;

export const serviceGenerateUniqueIdentifier: IServiceGeneratorIdentifierUnique =
  function generateUniqueIdentifier(): string {
    return `${Date.now()}${(currentIndex += 1)}`;
  };
