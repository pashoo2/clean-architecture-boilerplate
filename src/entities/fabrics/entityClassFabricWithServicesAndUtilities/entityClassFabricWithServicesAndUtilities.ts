import {BaseEntity} from '@root/entities/abstractClasses';
import {
  BaseEntityWithUtilities,
  IBaseEntityAbstractClassImplementationUtitlities,
} from '@root/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementation,
  TEntityTypeMain,
} from '@root/entities/interfaces';
import {TPickTransferableProperties} from '@root/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export function entityClassFabricWithServicesAndUtilities<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>,
  services: IBaseEntityServices<E>,
  utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>
): Constructor<
  IEntityImplementation<Id, Type, E>,
  [IBaseEntityParameters<Id>]
> {
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

    public getTransferableProps<T extends IEntityImplementation<Id, Type, E>>(
      this: T
    ): TPickTransferableProperties<T> {
      return getTransferableProps<T>(this);
    }
    protected _validate<T extends this>(this: T): void {
      validateInstance(this);
    }
    protected _getTransferableProps<T extends this>(
      this: T
    ): TPickTransferableProperties<T> {
      return getTransferableProps<T>(this);
    }
  }
  return EntityConstructor;
}
