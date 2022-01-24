import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices, IEntityFabricParameters, TEntityImplementation, TEntityTypeMain } from '../../../entities/interfaces';
import { Constructor } from '../../../interfaces/classes';
import { TIdentityValueObject } from '../../../valueObjects/interfaces';
export declare function entityClassFabricWithServices<Id extends TIdentityValueObject, Type extends TEntityTypeMain, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>, Entity extends TEntityImplementation<Id, Type, E> = TEntityImplementation<Id, Type, E>>(parameters: IEntityFabricParameters<Id, Type, Entity>, services: IBaseEntityServices<E>): Constructor<Entity, [IBaseEntityParameters<Id>]>;
