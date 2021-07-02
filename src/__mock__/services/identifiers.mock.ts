import {IServiceGeneratorIdentifierUnique} from '@root/services/interfaces/domain/generators/identifiers';
import {pad} from '@root/utilities/implementations/format';

export const serviceGeneratorIdentifierUnique: IServiceGeneratorIdentifierUnique =
  (() => {
    let callNumber = 0;

    return function getUniqueIdentifierString(): string {
      return '123e4567-e89b-12d3-a456-426614174' + pad((callNumber += 1), 3);
    };
  })();
