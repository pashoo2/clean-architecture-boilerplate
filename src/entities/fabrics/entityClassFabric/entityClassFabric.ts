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
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>,
  Entity extends TEntityImplementation<Id, Type, E> = TEntityImplementation<
    Id,
    Type,
    E
  >
>(
  parameters: IEntityFabricParameters<Id, Type, Entity>
): TEntityImplementationConstructor<Id, Type, E, Entity> {
  const {type, validateInstance, getTransferableProps} = parameters;
  class EntityConstructor extends BaseEntity<Id, Type, E> {
    protected _type = type;
    protected _validate<T extends this>(this: T): void {
      validateInstance(this);
    }
    protected _getTransferableProps(): TPickTransferableProperties<this> {
      // TODO - resolve any
      return getTransferableProps(
        this as any as Entity
      ) as any as TPickTransferableProperties<this>;
    }
  }
  // TODO - resolve any
  return EntityConstructor as any as TEntityImplementationConstructor<
    Id,
    Type,
    E,
    Entity
  >;
}
