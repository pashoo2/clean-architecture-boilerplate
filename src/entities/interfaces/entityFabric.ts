import {TEntityTypeMain} from '@root/entities/interfaces';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from '@root/entities/interfaces/baseEntity';
import {IEntity, IEntityImplementation} from '@root/entities/interfaces/entity';
import {TPickTransferableProperties} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export interface IValidateEntity<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain
> {
  (entity: IEntity<EntityId, EntityType>): void;
}

export interface IGetTransferablePropertiesOfEntity<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain
> {
  <T extends IEntity<EntityId, EntityType>>(
    entity: T
  ): TPickTransferableProperties<T>;
}

export interface IEntityFabricParameters<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain
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
  EntityType extends TEntityTypeMain,
  E extends IBaseEntityEventsList<EntityId, EntityType>
> {
  (parameters: IEntityFabricParameters<EntityId, EntityType>): Constructor<
    IEntityImplementation<EntityId, EntityType, E>,
    [IBaseEntityParameters<EntityId>, IBaseEntityServices<E>]
  >;
}
