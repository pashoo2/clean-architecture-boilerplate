import {BaseEntity} from '@root/entities/abstractClasses/baseEntity';
import {IBaseEntityParameters} from '@root/entities/interfaces/baseEntity';
import {
  ITransferable,
  TPickTransferableProperties,
} from '@root/interfaces/transferable';
import {mockDomainEventBus} from '@root/__mock__/services/domainEventsBus.mock';
import {convertTransferableToSerializableAsync} from '@root/utilities/implementations/serialization/convertTransferableToSerializable/convertTransferableToSerializable';
import {BaseValueObjectStringSerialization} from '@root/valueObjects/interfaces/abstractClasses';
import {serviceGeneratorIdentifierUnique} from '@root/__mock__/services/identifiers.mock';
import {createAndInitializeEntity} from '../../../../entities/utilities/implementations';

const ENTITY_CLASS_TYPE = 'TransferableEntity' as const;

class IdVO extends BaseValueObjectStringSerialization<string> {
  _validate() {
    return true;
  }
}
class TransferableEntity extends BaseEntity<IdVO, typeof ENTITY_CLASS_TYPE> {
  public get type() {
    return this._type;
  }

  public get nestedObject() {
    const {id} = this;
    return {
      idProp: id,
      getTransferableProps() {
        return {
          get id() {
            return id;
          },
          get type() {
            return ENTITY_CLASS_TYPE;
          },
          get simpleObject() {
            return {
              a: 'a',
              b: 1,
            };
          },
          get objectWithToString() {
            return {
              toString() {
                return 'objectWithToString';
              },
            };
          },
        };
      },
    };
  }

  public get simpleObject() {
    return {
      isSimple: true,
    };
  }

  public get dateObject() {
    return new Date();
  }

  public get numericValue() {
    return 1;
  }

  public get infiniteNumber() {
    return Infinity;
  }

  public get objectWithToString() {
    return {
      toString() {
        return 'objectWithToString';
      },
    };
  }

  protected _type = ENTITY_CLASS_TYPE;

  constructor(parameters: IBaseEntityParameters<IdVO>) {
    super(parameters, {
      domainEventBus: mockDomainEventBus,
      generateUniqueIdentifierString: serviceGeneratorIdentifierUnique,
    });
  }

  protected _validate() {
    return true;
  }

  public getTransferableProps() {
    return this._getTransferableProps();
  }

  protected _getTransferableProps<T extends this>(
    this: T
  ): TPickTransferableProperties<T> {
    const {
      id,
      type,
      isDeleted,
      nestedObject,
      dateObject,
      infiniteNumber,
      numericValue,
      simpleObject,
      objectWithToString,
    } = this;
    return {
      id,
      type,
      isDeleted,
      nestedObject,
      dateObject,
      infiniteNumber,
      numericValue,
      simpleObject,
      objectWithToString,
    } as TPickTransferableProperties<TransferableEntity> as TPickTransferableProperties<T>;
  }
}

describe('Transferable object utilities', () => {
  let transferableEntity: ITransferable;
  const ENTITY_ID = '123456';

  beforeEach(() => {
    const id = new IdVO(ENTITY_ID);
    transferableEntity = createAndInitializeEntity(TransferableEntity, {
      id,
      isDeleted: false,
    });
  });

  test('Transferable entity should have "getTransferableProps" method returns a transferable object', () => {
    expect(transferableEntity).toBeDefined();
    expect(transferableEntity.getTransferableProps()).toEqual({
      id: expect.objectContaining({
        serialize: expect.any(Function),
      }),
      isDeleted: false,
      type: ENTITY_CLASS_TYPE,
      nestedObject: {
        idProp: expect.objectContaining({
          serialize: expect.any(Function),
        }),
        getTransferableProps: expect.any(Function),
      },
      simpleObject: expect.objectContaining({
        isSimple: true,
      }),
      dateObject: expect.any(Date),
      numericValue: 1,
      infiniteNumber: Infinity,
      objectWithToString: expect.objectContaining({
        toString: expect.any(Function),
      }),
    });
  });

  describe('convertToTransferableAsync', () => {
    test('Should convert object that is got with "getTransferableProps"', async () => {
      await expect(
        convertTransferableToSerializableAsync(
          transferableEntity.getTransferableProps()
        )
      ).resolves.toEqual({
        id: ENTITY_ID,
        isDeleted: false,
        type: ENTITY_CLASS_TYPE,
        nestedObject: {
          id: ENTITY_ID,
          type: ENTITY_CLASS_TYPE,
          simpleObject: {
            a: 'a',
            b: 1,
          },
          objectWithToString: 'objectWithToString',
        },
        simpleObject: {
          isSimple: true,
        },
        dateObject: expect.any(Date),
        numericValue: 1,
        infiniteNumber: 'Infinity',
        objectWithToString: 'objectWithToString',
      });
    });
  });
});
