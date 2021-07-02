import {IBaseEntityAbstractClassImplementationUtitlities} from '@root/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {entityClassFabricWithServicesAndUtilities} from '@root/entities/fabrics/entityClassFabricWithServicesAndUtilities';
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

export function entityClassWithDeleteMethodServicesAndUtilitiesFabric<
  Id extends TIdentityValueObject,
  Type extends TEntityTypeMain,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>,
  services: IBaseEntityServices<E>,
  utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>
): Constructor<
  IEntityImplementationWithDeleteMethod<Id, Type, E>,
  [IBaseEntityParameters<Id>]
> {
  class EntityConstructorWithDeleteMethod extends entityClassFabricWithServicesAndUtilities<
    Id,
    Type,
    E
  >(parameters, services, utilities) {
    public $delete() {
      // TODO - find a way to resolve the instance type without casting to ANY
      (this as any)._delete();
    }
  }
  return EntityConstructorWithDeleteMethod;
}
