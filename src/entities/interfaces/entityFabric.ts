import {TEntityType} from 'src/entities/interfaces';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from 'src/entities/interfaces/baseEntity';
import {IEntity, IEntityImplementation} from 'src/entities/interfaces/entity';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IValidateEntity<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> {
  (entity: IEntity<EntityId, EntityType>): void;
}

export interface IGetTransferablePropertiesOfEntity<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> {
  <T extends IEntity<EntityId, EntityType>>(
    entity: T
  ): TPickTransferableProperties<T>;
}

export interface IEntityFabricParameters<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType
> {
  type: EntityType;
  validateInstance: IValidateEntity<EntityId, EntityType>;
  getTransferableProps: IGetTransferablePropertiesOfEntity<
    EntityId,
    EntityType
  >;
}

export interface IEntityClassFabric<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityType,
  E extends IBaseEntityEventsList<EntityId, EntityType>
> {
  (parameters: IEntityFabricParameters<EntityId, EntityType>): Constructor<
    IEntityImplementation<EntityId, EntityType, E>,
    [IBaseEntityParameters<EntityId>, IBaseEntityServices<E>]
  >;
}
