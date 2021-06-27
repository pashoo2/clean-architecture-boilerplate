import {TEntityType} from 'src/entities/interfaces/index';

export function compareEntitiesTypes(
  firstEntityType: TEntityType,
  secondEntityType: TEntityType
): boolean {
  return String(firstEntityType).trim() === String(secondEntityType).trim();
}
