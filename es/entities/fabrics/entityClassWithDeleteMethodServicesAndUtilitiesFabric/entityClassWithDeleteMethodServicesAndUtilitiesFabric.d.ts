import { IBaseEntityAbstractClassImplementationUtitlities } from '../../../entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices, IEntityFabricParameters, IEntityImplementationWithDeleteMethod, TEntityTypeMain } from '../../../entities/interfaces';
import { Constructor } from '../../../interfaces/classes';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function entityClassWithDeleteMethodServicesAndUtilitiesFabric<Id extends TIdentityValueObject, Type extends TEntityTypeMain, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>>(parameters: IEntityFabricParameters<Id, Type>, services: IBaseEntityServices<E>, utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>): Constructor<IEntityImplementationWithDeleteMethod<Id, Type, E>, [
    IBaseEntityParameters<Id>
]>;
