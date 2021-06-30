import {entityClassFabricWithServices} from 'src/entities/fabrics/entityClassFabricWithServices';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementationWithDeleteMethod,
  TEntityTypeMain,
} from 'src/entities/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

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
