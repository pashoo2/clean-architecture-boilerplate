import { IBaseEntityEventsList, IEntityFabricParameters, TEntityImplementation, TEntityTypeMain } from '../../../entities/interfaces';
import { TEntityImplementationConstructor } from '../../../entities/interfaces/entityFabric';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function entityClassFabric<Id extends TIdentityValueObject, Type extends TEntityTypeMain, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>, Entity extends TEntityImplementation<Id, Type, E> = TEntityImplementation<Id, Type, E>>(parameters: IEntityFabricParameters<Id, Type, Entity>): TEntityImplementationConstructor<Id, Type, E, Entity>;
