import {BaseEntity} from 'src/entities/abstractClasses';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementationWithDeleteMethod,
} from 'src/entities/interfaces';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export function entityClassWithDeleteMethodFabric<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>
): Constructor<
  IEntityImplementationWithDeleteMethod<Id, Type, E>,
  [IBaseEntityParameters<Id>, IBaseEntityServices<E>]
> {
  const {type, validateInstance, getTransferableProps} = parameters;
  class EntityWithDeleteMethod extends BaseEntity<Id, Type, E> {
    protected _type = type;
    public $delete() {
      this._delete();
    }
    protected _validate<T extends this>(this: T): void {
      validateInstance(this);
    }
    protected _getTransferableProps<T extends this>(
      this: T
    ): TPickTransferableProperties<T> {
      return getTransferableProps(this);
    }
  }
  return EntityWithDeleteMethod;
}
