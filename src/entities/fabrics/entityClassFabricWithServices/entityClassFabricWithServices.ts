import {entityClassFabric} from '@root/entities/fabrics/entityClassFabric/entityClassFabric';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  TEntityImplementation,
  TEntityTypeMain,
} from '@root/entities/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export function entityClassFabricWithServices<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>,
  Entity extends TEntityImplementation<Id, Type, E> = TEntityImplementation<
    Id,
    Type,
    E
  >
>(
  parameters: IEntityFabricParameters<Id, Type, Entity>,
  services: IBaseEntityServices<E>
): Constructor<Entity, [IBaseEntityParameters<Id>]> {
  const BaseEntityClass = entityClassFabric<Id, Type, E, Entity>(parameters);
  // TODO - resolve any
  class EntityConstructor extends (BaseEntityClass as any) {
    constructor(parameters: IBaseEntityParameters<Id>) {
      super(parameters, services);
    }
  }
  return EntityConstructor as Constructor<Entity, [IBaseEntityParameters<Id>]>;
}
