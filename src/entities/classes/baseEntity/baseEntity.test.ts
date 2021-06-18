import {BaseEntity} from 'src/entities/classes/baseEntity/baseEntity';
import {TPickTransferableProperties} from 'src/interfaces';
import {
  MultipleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassMock,
  UNIQUE_ENTITY_IDENTITY_MULTI_STUB,
  UNIQUE_ENTITY_IDENTITY_SIMPLE_STUB,
} from 'src/__mock__/valueObjects.mock';
import {EventEmitter} from 'stream';

describe('BaseEntity class', () => {
  const ENTITY_TYPE = 'ENTITY_TYPE' as const;

  class EntityTestClass extends BaseEntity<any, typeof ENTITY_TYPE> {
    protected _type = ENTITY_TYPE;

    protected _getTransferableProps<T extends this>(
      this: T
    ): TPickTransferableProperties<T> {
      const transferableObject: TPickTransferableProperties<EntityTestClass> = {
        id: this.id,
        isDeleted: this.isDeleted,
        type: this.type,
      };
      return transferableObject as TPickTransferableProperties<T>;
    }

    protected _validate() {}
  }
});
