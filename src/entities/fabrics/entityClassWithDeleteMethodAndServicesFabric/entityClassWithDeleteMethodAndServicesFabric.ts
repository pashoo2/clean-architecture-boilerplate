import {entityClassFabricWithServices} from '@root/entities/fabrics/entityClassFabricWithServices';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementationWithDeleteMethod,
  TEntityTypeMain,
} from '@root/entities/interfaces';
import {Constructor} from '@root/interfaces/classes';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export function entityClassWithDeleteMethodAndServicesFabric<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>,
  services: IBaseEntityServices<E>
): Constructor<
  IEntityImplementationWithDeleteMethod<Id, Type, E>,
  [IBaseEntityParameters<Id>]
> {
  class EntityConstructorWithDeleteMethod extends entityClassFabricWithServices<
    Id,
    Type,
    E
  >(parameters, services) {
    public $delete() {
      // TODO - find a way to resolve the instance type without casting to ANY
      (this as any)._delete();
    }
  }
  return EntityConstructorWithDeleteMethod;
}
