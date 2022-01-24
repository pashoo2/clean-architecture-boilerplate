import { IEntity, TEntityTypeMain } from '../../../entities/interfaces';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function validateEntityType(entityType: TEntityTypeMain): void;
export declare function validateEntityObject<EntityId extends TIdentityValueObject, EntityType extends TEntityTypeMain>(entity: IEntity<EntityId, EntityType>): void;
export declare function validateEntityBasic<EntityId extends TIdentityValueObject, EntityType extends TEntityTypeMain>(entity: IEntity<EntityId, EntityType>): void;
