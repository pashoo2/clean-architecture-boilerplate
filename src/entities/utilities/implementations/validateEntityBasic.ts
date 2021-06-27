import {IEntity, TEntityType} from 'src/entities/interfaces';
import {isEntityType} from 'src/entities/utilities/implementations/typeGuards';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';
import {validateEntityIdentity} from 'src/valueObjects/utilities/implementations';

export function validateEntityType(entityType: TEntityType): void {
  if (isEntityType(entityType)) {
    throw new Error('The entity type is not valid');
  }
}

export function validateEntityBasic<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
>(entity: IEntity<EntityId, EntityType>): void {
  validateEntityIdentity(entity.id);
  if (!isEntityType(entity.type)) {
    throw new Error('An invalid entity type');
  }
}
