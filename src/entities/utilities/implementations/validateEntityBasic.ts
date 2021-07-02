import {IEntity, TEntityTypeMain} from '@root/entities/interfaces';
import {isEntityMainType} from '@root/entities/utilities/implementations/typeGuards';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';
import {validateEntityIdentity} from '@root/valueObjects/utilities/implementations';

export function validateEntityType(entityType: TEntityTypeMain): void {
  if (!isEntityMainType(entityType)) {
    throw new Error('The entity type is not valid');
  }
}

export function validateEntityObject<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain
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
  EntityType extends TEntityTypeMain
>(entity: IEntity<EntityId, EntityType>): void {
  validateEntityObject(entity);
  validateEntityType(entity.type);
  validateEntityIdentity(entity.id);
}
