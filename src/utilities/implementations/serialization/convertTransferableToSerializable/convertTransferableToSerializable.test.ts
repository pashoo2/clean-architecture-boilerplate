import {BaseEntity} from 'src/entities/classes/baseEntity';
import {IBaseEntityParameters} from 'src/entities/interfaces/baseEntity';
import {
  ITransferable,
  TPickTransferableProperties,
} from 'src/interfaces/transferable';
import {mockDomainEventBus} from 'src/services/interfaces/domain/events/domainEventsBus.mock';
import {convertTransferableToSerializableAsync} from 'src/utilities/implementations/serialization/convertTransferableToSerializable/convertTransferableToSerializable';
import {BaseValueObjectStringSerialization} from 'src/valueObjects/interfaces/abstractClasses';

const ENTITY_CLASS_TYPE = 'TransferableEntity' as const;

class IdVO extends BaseValueObjectStringSerialization<string> {
  _validate() {
    return true;
  }
}
class TransferableEntity extends BaseEntity<IdVO, typeof ENTITY_CLASS_TYPE> {
  public get type() {
    return ENTITY_CLASS_TYPE;
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
        };
      },
    };
  }

  constructor(parameters: IBaseEntityParameters<IdVO>) {
    super(parameters, {
      domainEventBus: mockDomainEventBus,
    });
  }

  protected _validate() {
    return true;
  }

  public getTransferableProps() {
    const {id, type, isDeleted, nestedObject} = this;
    return {
      id,
      type,
      isDeleted,
      nestedObject,
    } as TPickTransferableProperties<TransferableEntity> as TPickTransferableProperties<this>;
  }
}

describe('Transferable object utilities', () => {
  let transferableEntity: ITransferable;
  const ENTITY_ID = '123456';

  beforeEach(() => {
    const id = new IdVO(ENTITY_ID);
    transferableEntity = new TransferableEntity({
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
        },
      });
    });
  });
});
