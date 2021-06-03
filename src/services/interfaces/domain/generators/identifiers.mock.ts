import {IServiceGeneratorIdentifierUnique} from 'src/services/interfaces/domain/generators/identifiers';
import {pad} from 'src/utilities/implementations/format';

let callNumber = 0;

function getUniqueIdentifierString(): string {
  return '123e4567-e89b-12d3-a456-426614174' + pad((callNumber += 1), 3);
}

export const serviceGeneratorIdentifierUnique: IServiceGeneratorIdentifierUnique =
  getUniqueIdentifierString;
