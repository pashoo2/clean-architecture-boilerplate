import {IEntity} from '@root/entities/interfaces/entity';
import {TIdentityValueObject} from '@root/valueObjects/interfaces';

export interface IEntityRepositoryCRUD<
  Entity extends IEntity<TIdentityValueObject, string>
> {
  create(data: Entity): Promise<void>;
  readById(id: TIdentityValueObject): Promise<Entity | undefined>;
  update(data: Entity): Promise<void>;
  deleteById(id: TIdentityValueObject): Promise<void>;
}
