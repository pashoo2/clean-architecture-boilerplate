import {TEntityType} from 'src/entities/interfaces/entity';
import {TIdentityValueObject} from '../../../valueObjects/interfaces/identityValueObject';
import {
  IBaseEntityEventsList,
  IBaseEntityParameters,
  IBaseEntityServices,
} from '../../interfaces/baseEntity';
import {BaseEntity} from 'src/entities/abstractClasses/baseEntity/baseEntity';
import {
  ICompareEntitiesIdentities,
  ICompareEntitiesTypes,
} from 'src/entities/utilities/interfaces';

export interface IBaseEntityAbstractClassImplementationUtitlities {
  compareEntitiesTypes: ICompareEntitiesTypes;
  compareEntitiesIdentities: ICompareEntitiesIdentities;
}

export abstract class BaseEntityWithUtilities<
  Id extends TIdentityValueObject,
  Type extends TEntityType,
  E extends IBaseEntityEventsList<Id, Type> = IBaseEntityEventsList<Id, Type>,
  U extends IBaseEntityAbstractClassImplementationUtitlities = IBaseEntityAbstractClassImplementationUtitlities
> extends BaseEntity<Id, Type, E> {
  constructor(
    parameters: IBaseEntityParameters<Id>,
    services: IBaseEntityServices<E>,
    protected _utilities: U
  ) {
    super(parameters, services);
    if (!_utilities) {
      throw new Error('Utilities must be passed as a constructor parameter');
    }
  }

  protected _compareEntitiesIdentities(
    firstId: TIdentityValueObject,
    secondId: TIdentityValueObject
  ): boolean {
    return this._utilities.compareEntitiesIdentities(firstId, secondId);
  }

  protected _compareEntitiesTypes(
    firstType: TEntityType,
    secondType: TEntityType
  ): boolean {
    return this._utilities.compareEntitiesTypes(firstType, secondType);
  }
}
