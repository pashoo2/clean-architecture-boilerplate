import {ENTITY_INITIALIZER_SCOPE_NAME} from '../../constants/entityInitialize';
import {createAndInitializeEntity} from './createAndInitializeEntity';

describe('createAndInitializeEntity', () => {
  it(`Should call constructor in a scope with a variable "${ENTITY_INITIALIZER_SCOPE_NAME}" equals to "true"`, () => {
    let variableValue = false;
    class Constructor {
      constructor() {
        variableValue = (self as any)[ENTITY_INITIALIZER_SCOPE_NAME];
      }
      $initializeInstance() {}
    }

    createAndInitializeEntity(Constructor);
    expect(variableValue).toBe(true);
  });

  it('Should call "$initializeInstance"', () => {
    let methodHasBeenCalled = false;
    class Constructor {
      constructor() {}
      $initializeInstance() {
        methodHasBeenCalled = true;
      }
    }

    createAndInitializeEntity(Constructor);
    expect(methodHasBeenCalled).toBe(true);
  });

  it('Should throw if an instance doesn\'t have "$initializeInstance" method', () => {
    class Constructor {
      constructor() {}
    }

    expect(() => createAndInitializeEntity(Constructor)).toThrow();
  });
});
