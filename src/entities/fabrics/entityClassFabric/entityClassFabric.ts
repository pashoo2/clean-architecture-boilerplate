import {BaseEntity} from 'src/entities/abstractClasses';
import {IBaseEntityAbstractClassImplementationUtitlities} from 'src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementation,
  TEntityTypeMain,
} from 'src/entities/interfaces';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IEntityClassFabricParametersWithUtils {
  classUtilities?: IBaseEntityAbstractClassImplementationUtitlities;
}

export function entityClassFabric<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>
): Constructor<
  IEntityImplementation<Id, Type, E>,
  [IBaseEntityParameters<Id>, IBaseEntityServices<E>]
> {
  const {type, validateInstance, getTransferableProps} = parameters;
  class EntityConstructor extends BaseEntity<Id, Type, E> {
    protected _type = type;
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
