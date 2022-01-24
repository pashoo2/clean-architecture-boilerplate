import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices, IEntityFabricParameters, IEntityImplementationWithDeleteMethod, TEntityTypeMain } from '../../../entities/interfaces';
import { Constructor } from '../../../interfaces/classes';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function entityClassWithDeleteMethodAndServicesFabric<Id extends TIdentityValueObject, Type extends TEntityTypeMain, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>>(parameters: IEntityFabricParameters<Id, Type>, services: IBaseEntityServices<E>): Constructor<IEntityImplementationWithDeleteMethod<Id, Type, E>, [
    IBaseEntityParameters<Id>
]>;
