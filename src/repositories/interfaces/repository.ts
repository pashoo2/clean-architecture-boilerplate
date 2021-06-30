import {IEntity} from 'src/entities/interfaces/entity';
import {TIdentityValueObject} from 'src/valueObjects/interfaces';

export interface IEntityRepositoryCRUD<
  Entity extends IEntity<TIdentityValueObject, string>
> {
  create(data: Entity): Promise<void>;
  readById(id: TIdentityValueObject): Promise<Entity | undefined>;
  update(data: Entity): Promise<void>;
  deleteById(id: TIdentityValueObject): Promise<void>;
}
