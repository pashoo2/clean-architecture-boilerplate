import {entityClassFabric} from 'src/entities/fabrics/entityClassFabric';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
  IEntityFabricParameters,
  IEntityImplementationWithDeleteMethod,
} from 'src/entities/interfaces';
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
  class EntityConstructorWithDeleteMethod extends entityClassFabric<
    Id,
    Type,
    E
  >(parameters) {
    public $delete() {
      // TODO - find a way to resolve the instance type without casting to ANY
      (this as any)._delete();
    }
  }
  return EntityConstructorWithDeleteMethod;
}
