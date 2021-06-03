import {IEntity, TEntityIdentity} from 'src/entities/interfaces/entity';

export interface IEntityRepositoryCRUD<Entity extends IEntity> {
  create(data: Entity): Promise<void>;
  readById(id: TEntityIdentity): Promise<Entity | undefined>;
  update(data: Entity): Promise<void>;
  deleteById(id: TEntityIdentity): Promise<void>;
}
