import {IBaseEntityAbstractClassImplementationUtitlities} from 'src/entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import {entityClassFabricWithServicesAndUtilities} from 'src/entities/fabrics/entityClassFabricWithServicesAndUtilities';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementationWithDeleteMethod,
} from 'src/entities/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export function entityClassWithDeleteMethodServicesAndUtilitiesFabric<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>
>(
  parameters: IEntityFabricParameters<Id, Type>,
  services: IBaseEntityServices<E>,
  utilities: IBaseEntityAbstractClassImplementationUtitlities
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
