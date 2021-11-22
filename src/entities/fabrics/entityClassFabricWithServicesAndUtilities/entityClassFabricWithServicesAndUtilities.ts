import {
  BaseEntityWithUtilities,
  IBaseEntityAbstractClassImplementationUtitlities,
} from '@root/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  TEntityImplementation,
  TEntityTypeMain,
} from '@root/entities/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export function entityClassFabricWithServicesAndUtilities<
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
  services: IBaseEntityServices<E>,
  utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>
): Constructor<Entity, [IBaseEntityParameters<Id>]> {
  const {type, validateInstance, getTransferableProps} = parameters;
  class EntityConstructor extends BaseEntityWithUtilities<
    Id,
    Type,
    E,
    typeof utilities
  > {
    protected _type = type;

    constructor(parameters: IBaseEntityParameters<Id>) {
      super(parameters, services, utilities);
    }
    protected _validate<T extends this>(this: T): void {
      validateInstance(this);
    }
    protected _getTransferableProps<T extends this>(
      this: T
    ): TPickTransferableProperties<T> {
      // TODO - resolve any
      return getTransferableProps(
        this as any as Entity
      ) as any as TPickTransferableProperties<T>;
    }
  }
  return EntityConstructor as any as Constructor<
    Entity,
    [IBaseEntityParameters<Id>]
  >;
}
