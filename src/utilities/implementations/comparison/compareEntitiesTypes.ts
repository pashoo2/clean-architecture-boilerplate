import {TEntityType} from 'src/entities/interfaces';

export function compareEntitiesTypes(
  firstEntityType: TEntityType,
  secondEntityType: TEntityType
): boolean {
  return String(firstEntityType).trim() === String(secondEntityType).trim();
}
