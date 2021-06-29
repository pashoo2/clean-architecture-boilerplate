import {IEntity, TEntityType} from 'src/entities/interfaces';
import {isEntityType} from 'src/entities/utilities/implementations/typeGuards';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';
import {validateEntityIdentity} from 'src/valueObjects/utilities/implementations';

export function validateEntityType(entityType: TEntityType): void {
  if (!isEntityType(entityType)) {
    throw new Error('The entity type is not valid');
  }
}

export function validateEntityObject<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
>(entity: IEntity<EntityId, EntityType>): void {
  if (!entity) {
    throw new Error('An entity should not be an empty value');
  }
  if (typeof entity !== 'object') {
    throw new Error('An entity must be a value of an object type');
  }
}

export function validateEntityBasic<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
>(entity: IEntity<EntityId, EntityType>): void {
  validateEntityObject(entity);
  validateEntityType(entity.type);
  validateEntityIdentity(entity.id);
}
