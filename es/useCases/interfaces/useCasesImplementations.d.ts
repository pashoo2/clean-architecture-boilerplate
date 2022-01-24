import { TBaseEntityEventsListCommonEvents } from '../../entities/interfaces/baseEntity';
import { BaseEntityAbstractClass } from '../../entities/abstractClasses/baseEntityAbstractClass';
import { TEntityTypeMain } from '../../entities/interfaces/entity';
import { IUseCaseParameters, IUseCaseServices } from '../../useCases/interfaces/useCasesOuter';
import { TIdentityValueObject } from '../../valueObjects/interfaces';
export declare type TUseCaseEntitiesClasses<T extends TEntityTypeMain = TEntityTypeMain, Id extends TIdentityValueObject = TIdentityValueObject> = {
    [key in T]: BaseEntityAbstractClass<Id, T, TBaseEntityEventsListCommonEvents<Id, T>>;
};
export interface IUseCaseWithEntitiesConstructorsSync<R, T extends TEntityTypeMain> {
    (parameters: IUseCaseParameters, services: IUseCaseServices, entitiesClasses: TUseCaseEntitiesClasses<T>): R;
}
export interface IUseCaseWithEntitiesConstructorsAsync<R, T extends TEntityTypeMain> extends IUseCaseWithEntitiesConstructorsSync<Promise<R>, T> {
}
