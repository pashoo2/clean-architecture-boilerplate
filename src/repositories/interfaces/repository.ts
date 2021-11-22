import {
  IAggregateRoot,
  IBaseAggregateRootEventsList,
  TAggregateRootImplementation,
  TAggregateRootImplementationConstructorByRawDataNoServices,
} from '@root/aggregates/interfaces';
import {
  IBaseEntityEventsList,
  TEntityImplementation,
} from '@root/entities/interfaces';
import {IEntity, TEntityTypeMain} from '@root/entities/interfaces/entity';
import {TEntityImplementationConstructorByRawDataNoServices} from '@root/entities/interfaces/entityFabric';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export type EntityList<Entity extends IEntity<TIdentityValueObject, string>> =
  Array<Entity>;

export type FilterEntityFunc<
  Entity extends IEntity<TIdentityValueObject, string>
> = (entity: Entity) => boolean;

export interface IEntityRepositoryCRUD<
  Entity extends IEntity<EntityId, string>,
  EntityId extends TIdentityValueObject = TIdentityValueObject
> {
  /**
   * Create a new entity in a data source
   *
   * @param {Entity} data
   * @returns {Promise<void>}
   * @memberof IEntityRepositoryCRUD
   */
  create(data: Entity): Promise<void>;
  /**
   * Read an entity by its identity
   *
   * @param {EntityId} id
   * @returns {(Promise<Entity | undefined>)}
   * @memberof IEntityRepositoryCRUD
   */
  getById(id: EntityId): Promise<Entity | undefined>;
  /**
   * Update data of an entity
   *
   * @param {Entity} data
   * @returns {Promise<void>}
   * @memberof IEntityRepositoryCRUD
   */
  update(data: Entity): Promise<void>;
  /**
   * Delete an entity by its identity
   *
   * @param {TIdentityValueObject} id
   * @returns {Promise<void>}
   * @memberof IEntityRepositoryCRUD
   */
  deleteById(id: EntityId): Promise<void>;
  /**
   * List all entities available in a data source connected.
   *
   * @returns {Promise<EntityList<Entity>>}
   * @memberof IEntityRepositoryCRUD
   */
  list(): Promise<EntityList<Entity>>;
  /**
   * List entities and filter them with the function provided
   * as the argument.
   *
   * @param {FilterEntityFunc<Entity>} filterFunction
   * @returns {Promise<EntityList<Entity>>}
   * @memberof IEntityRepositoryCRUD
   */
  list(filterFunction: FilterEntityFunc<Entity>): Promise<EntityList<Entity>>;
}

export type TEntityRepositoryCRUDPartial<
  Entity extends IEntity<EntityId, string>,
  EntityId extends TIdentityValueObject = TIdentityValueObject
> = Partial<IEntityRepositoryCRUD<Entity, EntityId>>;

export interface IEntityRepositoryCRUDFabricParameters<
  Entity extends IEntity<EntityId, EntityType>,
  EntityId extends TIdentityValueObject = TIdentityValueObject,
  EntityType extends TEntityTypeMain = TEntityTypeMain,
  E extends IBaseEntityEventsList<EntityId, EntityType> = IBaseEntityEventsList<
    EntityId,
    EntityType
  >
> {
  /**
   * A constructor that allow to create an implementation of the entity
   * based only on properties of the entity.
   *
   * @type {TEntityImplementationConstructorByRawDataNoServices<
   *     EntityId,
   *     EntityType,
   *     E,
   *     TEntityImplementation<
   *       EntityId,
   *       EntityType,
   *       E,
   *       Entity
   *     >
   *   >}
   * @memberof IEntityRepositoryCRUDFabricParameters
   */
  entityConstructor: TEntityImplementationConstructorByRawDataNoServices<
    EntityId,
    EntityType,
    E,
    TEntityImplementation<EntityId, EntityType, E, Entity>
  >;
}

/**
 * A fabric for construction an instance of a repository for reading data of an entity.
 */
export type TEntityRepositoryCRUDFabric<
  Entity extends IEntity<TIdentityValueObject, TEntityTypeMain>,
  Repository extends TEntityRepositoryCRUDPartial<Entity> = TEntityRepositoryCRUDPartial<Entity>,
  Parameters extends IEntityRepositoryCRUDFabricParameters<Entity> = IEntityRepositoryCRUDFabricParameters<Entity>
> = (parameters: Parameters) => Repository;

export interface IAggregateRepositoryCRUDFabricParameters<
  Aggregate extends IAggregateRoot<AggregateId, AggregateType>,
  AggregateId extends TIdentityValueObject = TIdentityValueObject,
  AggregateType extends string = string,
  E extends IBaseAggregateRootEventsList<
    AggregateId,
    AggregateType
  > = IBaseAggregateRootEventsList<AggregateId, AggregateType>
> {
  /**
   * Constructor of an instance of the aggregate
   *
   * @type {TAggregateRootImplementationConstructorByRawDataNoServices<
   *     AggregateId,
   *     AggregateType,
   *     E,
   *     TAggregateRootImplementation<AggregateId, AggregateType, E, Aggregate>
   *   >}
   * @memberof IAggregateRepositoryCRUDFabricParameters
   */
  aggregateConstructor: TAggregateRootImplementationConstructorByRawDataNoServices<
    AggregateId,
    AggregateType,
    E,
    TAggregateRootImplementation<AggregateId, AggregateType, E, Aggregate>
  >;
}

/**
 * A fabric for construction an instance of a repository for reading data of an aggregate root.
 */
export type TAggregateRepositoryCRUDFabric<
  Aggregate extends IAggregateRoot<TIdentityValueObject, string>,
  Repository extends TEntityRepositoryCRUDPartial<Aggregate> = TEntityRepositoryCRUDPartial<Aggregate>,
  Parameters extends IAggregateRepositoryCRUDFabricParameters<Aggregate> = IAggregateRepositoryCRUDFabricParameters<Aggregate>
> = (parameters: Parameters) => Repository;
