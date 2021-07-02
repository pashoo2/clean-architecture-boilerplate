import {TBaseEntityEventsListCommonEvents} from '@root/entities/interfaces/baseEntity';
import {BaseEntityAbstractClass} from '@root/entities/abstractClasses/baseEntityAbstractClass';
import {TEntityTypeMain} from '@root/entities/interfaces/entity';
import {
  IUseCaseParameters,
  IUseCaseServices,
} from '@root/useCases/interfaces/useCasesOuter';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export type TUseCaseEntitiesClasses<
  T extends TEntityTypeMain = TEntityTypeMain,
  Id extends TIdentityValueObject = TIdentityValueObject
> = {
  [key in T]: BaseEntityAbstractClass<
    Id,
    T,
    TBaseEntityEventsListCommonEvents<Id, T>
  >;
};

export interface IUseCaseWithEntitiesConstructorsSync<
  R,
  T extends TEntityTypeMain
> {
  (
    parameters: IUseCaseParameters,
    services: IUseCaseServices,
    entitiesClasses: TUseCaseEntitiesClasses<T>
  ): R;
}

export interface IUseCaseWithEntitiesConstructorsAsync<
  R,
  T extends TEntityTypeMain
> extends IUseCaseWithEntitiesConstructorsSync<Promise<R>, T> {}
