import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from 'src/entities/interfaces/baseEntity';
import {IEntity, IEntityImplementation} from 'src/entities/interfaces/entity';
import {TPickTransferableProperties} from 'src/interfaces';
import {Constructor} from 'src/interfaces/classes';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IValidateEntity<
  Id extends TIdentityValueObject,
  Type extends string
> {
  (entity: IEntity<Id, Type>): void;
}

export interface IGetTransferablePropertiesOfEntity<
  Id extends TIdentityValueObject,
  Type extends string
> {
  <T extends IEntity<Id, Type>>(entity: T): TPickTransferableProperties<T>;
}

export interface IEntityFabricParameters<
  Id extends TIdentityValueObject,
  Type extends string
> {
  type: Type;
  validateInstance: IValidateEntity<Id, Type>;
  getTransferableProps: IGetTransferablePropertiesOfEntity<Id, Type>;
}

export interface IEntityClassFabric<
  Id extends TIdentityValueObject,
  Type extends string,
  E extends IBaseEntityEventsList<Id, Type>
> {
  (parameters: IEntityFabricParameters<Id, Type>): Constructor<
    IEntityImplementation<Id, Type, E>,
    [IBaseEntityParameters<Id>, IBaseEntityServices<E>]
  >;
}
