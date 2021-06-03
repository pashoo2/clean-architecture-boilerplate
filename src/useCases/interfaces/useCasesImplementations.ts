import {IBaseEntityEventsList} from 'src/entities/interfaces/baseEntity';
import {BaseEntityAbstractClass} from 'src/entities/interfaces/baseEntityAbstractClass';
import {TEntityType} from 'src/entities/interfaces/entity';
import {
  IUseCaseParameters,
  IUseCaseServices,
} from 'src/useCases/interfaces/useCasesOuter';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export type TUseCaseEntitiesClasses<
  T extends TEntityType = TEntityType,
  Id extends TIdentityValueObject = TIdentityValueObject
> = {
  [key in T]: BaseEntityAbstractClass<Id, T, IBaseEntityEventsList<Id, T>>;
};

export interface IUseCaseWithEntitiesConstructorsSync<
  R,
  T extends TEntityType
> {
  (
    parameters: IUseCaseParameters,
    services: IUseCaseServices,
    entitiesClasses: TUseCaseEntitiesClasses<T>
  ): R;
}

export interface IUseCaseWithEntitiesConstructorsAsync<R, T extends TEntityType>
  extends IUseCaseWithEntitiesConstructorsSync<Promise<R>, T> {}
