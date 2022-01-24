import {TEntityTypeMain} from '@root/entities/interfaces';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from '@root/entities/interfaces/baseEntity';
import {IEntity, TEntityImplementation} from '@root/entities/interfaces/entity';
import {
  OmitNeverProps,
  TMakeTargetNullOrUndefined,
  TMergeProperties,
  TPickReadOnlyProperties,
  TPickTransferableProperties,
  TSimpleType,
  TSimpleObject,
  TSimpleArray,
} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {
  IBaseValueObject,
  IIdentityMultiValueObject,
  TIdentityValueObject,
} from '@root/valueObjects/interfaces';

export interface IValidateEntity<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain
> {
  (entity: IEntity<EntityId, EntityType>): void;
}

export interface IGetTransferablePropertiesOfEntity<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain,
  Entity extends IEntity<EntityId, EntityType> = IEntity<EntityId, EntityType>
> {
  <T extends Entity>(entity: T): TPickTransferableProperties<T>;
}

export interface IEntityFabricParameters<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain,
  Entity extends TEntityImplementation<
    EntityId,
    EntityType,
    IBaseEntityEventsList<EntityId, EntityType>
  > = TEntityImplementation<
    EntityId,
    EntityType,
    IBaseEntityEventsList<EntityId, EntityType>
  >
> {
  type: EntityType;
  validateInstance: IValidateEntity<EntityId, EntityType>;
  getTransferableProps: IGetTransferablePropertiesOfEntity<
    EntityId,
    EntityType,
    Entity
  >;
}

export type TEntityImplementationConstructor<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain,
  E extends IBaseEntityEventsList<EntityId, EntityType>,
  EntityImplementation extends TEntityImplementation<
    EntityId,
    EntityType,
    E
  > = TEntityImplementation<EntityId, EntityType, E>,
  ConstructorParameters extends IBaseEntityParameters<EntityId> = IBaseEntityParameters<EntityId>
> = Constructor<
  EntityImplementation,
  [ConstructorParameters, IBaseEntityServices<E>]
>;

export interface IEntityClassFabric<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain,
  E extends IBaseEntityEventsList<EntityId, EntityType>
> {
  (
    parameters: IEntityFabricParameters<EntityId, EntityType>
  ): TEntityImplementationConstructor<EntityId, EntityType, E>;
}

export type TSimpleTypeProp =
  | Exclude<TSimpleType, null | undefined>
  | TSimpleObject
  | TSimpleArray;

export type TPickEntityPropertyRequiredValueRaw<P extends unknown> =
  P extends IBaseValueObject<infer V, any>
    ? V
    : P extends IIdentityMultiValueObject<infer V>
    ? V
    : P extends IBaseValueObject<infer V, any>[]
    ? V[]
    : P extends IIdentityMultiValueObject<infer V>[]
    ? V[]
    : P extends TSimpleTypeProp
    ? P
    : never;

export type TPickEntityPropertyRequiredValue<P extends unknown> = P extends
  | IBaseValueObject<any, any>
  | IBaseValueObject<any, any>[]
  ? P
  : P extends IIdentityMultiValueObject<any> | IIdentityMultiValueObject<any>[]
  ? P
  : P extends TSimpleTypeProp
  ? P
  : never;

export type TPickEntityProperties<C extends Object> = {
  [K in TPickReadOnlyProperties<C>]: TMakeTargetNullOrUndefined<
    C[K],
    TPickEntityPropertyRequiredValue<C[K]>
  >;
};

export type TPickEntityPropertiesRaw<C extends Object> = {
  [K in TPickReadOnlyProperties<C>]: TMakeTargetNullOrUndefined<
    C[K],
    TPickEntityPropertyRequiredValueRaw<C[K]>
  >;
};

/**
 * All parameters that are necessary for creation of an instance of the entity.
 */
export type TEntityImplementationConstructorParametersFull<
  Entity extends IEntity<EntityId, string>,
  EntityId extends TIdentityValueObject = TIdentityValueObject
> = OmitNeverProps<
  TMergeProperties<
    IBaseEntityParameters<Entity['id']>,
    Readonly<TPickEntityProperties<Entity>>
  >
>;

/**
 * A constructor of an instance of the entity, which doesn't require
 * services as a parameter
 */
export type TEntityImplementationConstructorNoServices<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain,
  E extends IBaseEntityEventsList<EntityId, EntityType>,
  Entity extends IEntity<EntityId, EntityType> = IEntity<EntityId, EntityType>,
  EntityImplementation extends TEntityImplementation<
    EntityId,
    EntityType,
    E,
    Entity
  > = TEntityImplementation<EntityId, EntityType, E, Entity>,
  ConstructorParameters extends TEntityImplementationConstructorParametersFull<Entity> = TEntityImplementationConstructorParametersFull<Entity>
> = Constructor<EntityImplementation, [ConstructorParameters]>;

/**
 * All parameters that are necessary for creation of an instance of the entity.
 */
export type TEntityImplementationConstructorParametersRawFull<
  Entity extends IEntity<EntityId, string>,
  EntityId extends TIdentityValueObject = TIdentityValueObject
> = Omit<TPickEntityPropertiesRaw<Entity>, 'type'>;

/**
 * A constructor of an instance of the entity, which doesn't require
 * services as a parameter
 */
export type TEntityImplementationConstructorByRawDataNoServices<
  EntityId extends TIdentityValueObject,
  EntityType extends TEntityTypeMain,
  E extends IBaseEntityEventsList<EntityId, EntityType>,
  Entity extends IEntity<EntityId, EntityType> = IEntity<EntityId, EntityType>,
  EntityImplementation extends TEntityImplementation<
    EntityId,
    EntityType,
    E,
    Entity
  > = TEntityImplementation<EntityId, EntityType, E, Entity>,
  ConstructorParameters extends TEntityImplementationConstructorParametersRawFull<Entity> = TEntityImplementationConstructorParametersRawFull<Entity>
> = Constructor<EntityImplementation, [ConstructorParameters]>;
