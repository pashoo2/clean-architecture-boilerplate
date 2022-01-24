import { IBaseEntityAbstractClassImplementationUtitlities } from '../../../entities/abstractClasses/baseEntityWithUtilities/baseEntityWithUtilities';
import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices, IEntityFabricParameters, TEntityImplementation } from '../../../entities/interfaces';
import { Constructor } from '../../../interfaces/classes';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
import { ENTITY_TYPE_STUB } from '../../../__mock__/entityType.stub';
export declare function runTestsForEntityClassFabricWithServicesAndUtilities<Id extends TIdentityValueObject, Type extends typeof ENTITY_TYPE_STUB, E extends IBaseEntityEventsList<Id, Type>>(entityClassFabricWithServicesAndUtilities: (parameters: IEntityFabricParameters<Id, Type>, services: IBaseEntityServices<E>, utilities: IBaseEntityAbstractClassImplementationUtitlities<Id, Type>) => Constructor<TEntityImplementation<Id, Type, E>, [
    IBaseEntityParameters<Id>
]>, testName?: string): void;
