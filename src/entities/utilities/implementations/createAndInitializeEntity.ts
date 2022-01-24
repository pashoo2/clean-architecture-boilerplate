import {Constructor} from '../../../interfaces/classes';
import {ENTITY_INITIALIZER_SCOPE_NAME} from '../../constants/entityInitialize';
import {IEntityImplementationWithInitialization} from '../../interfaces';

export function createAndInitializeEntity<T>(
  EntityConstructor: Constructor<T>,
  ...parameters: ConstructorParameters<typeof EntityConstructor>
): T {
  (self as any)[ENTITY_INITIALIZER_SCOPE_NAME] = true;
  const instance = new EntityConstructor(...parameters);

  delete (self as any)[ENTITY_INITIALIZER_SCOPE_NAME];
  (
    instance as unknown as IEntityImplementationWithInitialization
  ).$initializeInstance();
  return instance;
}
