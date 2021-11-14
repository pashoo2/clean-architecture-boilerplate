import {BaseEntity} from '@root/entities/abstractClasses';
import {
  IBaseEntityEventsList,
  IEntityFabricParameters,
  TEntityImplementation,
  TEntityTypeMain,
} from '@root/entities/interfaces';
import {TEntityImplementationConstructor} from '@root/entities/interfaces/entityFabric';
import {TPickTransferableProperties} from '@root/interfaces';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export function entityClassFabric<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>
): TEntityImplementationConstructor<Id, Type, E> {
  const {type, validateInstance, getTransferableProps} = parameters;
  class EntityConstructor extends BaseEntity<Id, Type, E> {
    protected _type = type;
    public getTransferableProps<T extends TEntityImplementation<Id, Type, E>>(
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
