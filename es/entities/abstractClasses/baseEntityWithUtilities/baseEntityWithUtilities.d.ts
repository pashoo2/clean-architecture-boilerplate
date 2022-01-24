import { TEntityTypeMain } from '../../../entities/interfaces/entity';
import { TIdentityValueObject } from '../../../valueObjects/interfaces/identityValueObject';
import { IBaseEntityEventsList, IBaseEntityParameters, IBaseEntityServices } from '../../interfaces/baseEntity';
import { BaseEntity } from '../../../entities/abstractClasses/baseEntity/baseEntity';
import { ICompareEntitiesIdentities, ICompareEntitiesTypes } from '../../../entities/utilities/interfaces';
export interface IBaseEntityAbstractClassImplementationUtitlities<Id extends TIdentityValueObject, Type extends TEntityTypeMain> {
    compareEntitiesTypes: ICompareEntitiesTypes<Type>;
    compareEntitiesIdentities: ICompareEntitiesIdentities<Id>;
}
export declare abstract class BaseEntityWithUtilities<Id extends TIdentityValueObject, Type extends TEntityTypeMain, E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>, U extends IBaseEntityAbstractClassImplementationUtitlities<Id, Type> = IBaseEntityAbstractClassImplementationUtitlities<Id, Type>> extends BaseEntity<Id, Type, E> {
    protected _utilities: U;
    constructor(parameters: IBaseEntityParameters<Id>, services: IBaseEntityServices<E>, _utilities: U);
    protected _compareEntitiesIdentities(firstId: Id, secondId: Id): boolean;
    protected _compareEntitiesTypes(firstType: Type, secondType: Type): boolean;
}
