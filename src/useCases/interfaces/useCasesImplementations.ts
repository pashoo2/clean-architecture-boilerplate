import {TBaseEntityEventsListCommonEvents} from 'src/entities/interfaces/baseEntity';
import {BaseEntityAbstractClass} from 'src/entities/abstractClasses/baseEntityAbstractClass';
import {TEntityTypeMain} from 'src/entities/interfaces/entity';
import {
  IUseCaseParameters,
  IUseCaseServices,
} from 'src/useCases/interfaces/useCasesOuter';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

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

export interface IUseCaseWithEntitiesConstructorsAsync<R, T extends TEntityTypeMain>
  extends IUseCaseWithEntitiesConstructorsSync<Promise<R>, T> {}
