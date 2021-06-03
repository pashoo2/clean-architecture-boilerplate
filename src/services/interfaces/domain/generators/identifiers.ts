import {IService} from 'src/services/interfaces/common';

/**
 * Should generate a completely unique identifiers
 * among the whole application entities.
 * E.g. UUID v4 might be used
 *
 * @export
 * @interfaces IServiceGeneratorIdentifierUnique
 */
export interface IServiceGeneratorIdentifierUnique extends IService<string> {
  (): string;
}
