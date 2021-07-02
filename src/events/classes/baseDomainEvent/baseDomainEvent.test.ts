import {
  BaseDomainEventClass,
  IBaseDomainEventParameters,
  IBaseDomainEventParametersWithoutPayload,
} from '@root/events/classes/baseDomainEvent/baseDomainEvent';
import {TDomainEventPayload} from '@root/events/interfaces';
import {OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR_SERIALIZABLE} from '@root/__mock__/objectTypes.stubs';
import {
  SIMPLE_TYPE_VALUES_SET_EMPTY,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
  SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
} from '@root/__mock__/simpleTypes.stubs';

const TEST_EVENT_NAME = 'TEST_EVENT_NAME' as const;

describe('BaseDomainEventClass', () => {
  class BaseDomainEventTestClass<
    P extends TDomainEventPayload = undefined
  > extends BaseDomainEventClass<typeof TEST_EVENT_NAME, P> {
    protected _name = TEST_EVENT_NAME;
  }
  const parametersWithPayload: IBaseDomainEventParameters<any> = {
    id: 'event with a payload',
    payload: {event_payload: 'event_payload'},
  };
  const parametersWithoutPayload: IBaseDomainEventParametersWithoutPayload = {
    id: 'event without a payload',
  };
  const parametersWithMetaVersion: IBaseDomainEventParametersWithoutPayload = {
    id: 'event without a payload',
    metaVersion: 1,
  };

  describe('Constructor', () => {
    it('Should throw an error without parameters', () => {
      expect(() => {
        new (BaseDomainEventTestClass as any)();
      }).toThrow();
    });
    it('Should throw without the "id"', () => {
      expect(() => {
        new (BaseDomainEventTestClass as any)({
          payload: {},
        });
      }).toThrow();
    });
    it('Should throw with an empty "id" parameter value', () => {
      expect(() => {
        new (BaseDomainEventTestClass as any)({
          id: '',
          payload: {},
        });
      }).toThrow();
    });
    it('Should not throw without the "payload" parameter', () => {
      expect(() => {
        new BaseDomainEventTestClass({
          id: '1',
        });
      }).not.toThrow();
    });
    it.each(SIMPLE_TYPE_VALUES_SET_EMPTY)(
      'Should not throw if the "payload" parameter value is %s',
      () => {
        expect(() => {
          new (BaseDomainEventTestClass as any)({
            id: 'not empty identity',
          });
        }).not.toThrow();
      }
    );
    it('Should not throw an error without the meta version parameter', () => {
      expect(() => {
        new BaseDomainEventTestClass({
          id: 'not empty identity',
          payload: {},
        });
      }).not.toThrow();
    });
  });

  describe.each([
    parametersWithPayload,
    parametersWithoutPayload,
    parametersWithMetaVersion,
  ])('An event constructed with the "%p" parameters', eventParameters => {
    let event: BaseDomainEventTestClass<any>;
    beforeEach(() => {
      event = new BaseDomainEventTestClass({...eventParameters});
    });

    describe('Format', () => {
      it('Should have a meta version greater than zero', () => {
        expect(event.metaVersion).toBeGreaterThan(0);
      });
      if (eventParameters.metaVersion) {
        it('Should have a meta version property equals to the passed in a parameters', () => {
          expect(event.metaVersion).toBe(eventParameters.metaVersion);
        });
      }
      if ((eventParameters as any).payload) {
        it('Should have a payload', () => {
          expect(event.payload).toBe((eventParameters as any).payload);
        });
      }
      it(`Should have a "name" property equals to the "${TEST_EVENT_NAME}"`, () => {
        expect(event.name).toEqual(TEST_EVENT_NAME);
      });
      it('Should have a "serialize" method', () => {
        expect(typeof event.serialize === 'function').toBe(true);
      });
    });

    describe('Serialization', () => {
      it('Should serialize into a string', () => {
        expect(event.serialize()).toEqual(expect.stringContaining(''));
      });
      it('Should serialize into a JSON string, which is able to be parsed', () => {
        expect(() => {
          JSON.parse(event.serialize());
        }).not.toThrow();
      });
      describe.each([
        ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_FINITE_NUMBERS,
        ...SIMPLE_TYPE_VALUES_SET_NOT_EMPTY_STRINGS,
        ...OBJECT_TYPE_VALUES_SET_OBJECTS_NOT_EMPTY_WITHOUT_CONSTRUCTOR_SERIALIZABLE,
      ])('With the payload %p', _eventPayload => {
        let eventWithPayload: BaseDomainEventTestClass<any>;
        let parsedEventWithPayloadSerialized: any;
        let eventPayload: any;
        beforeEach(() => {
          eventPayload = JSON.parse(JSON.stringify(_eventPayload));
          eventWithPayload = new BaseDomainEventTestClass({
            ...eventParameters,
            payload: eventPayload,
          });
          parsedEventWithPayloadSerialized = JSON.parse(
            eventWithPayload.serialize()
          );
        });
        test('After being serialized and parsed an object resulted should contain all props from parameters', () => {
          const objectExpected = JSON.parse(
            JSON.stringify({
              ...eventParameters,
              payload: eventPayload,
            })
          );
          expect(parsedEventWithPayloadSerialized).toEqual(
            expect.objectContaining({
              ...objectExpected,
              payload:
                typeof objectExpected.payload === 'object'
                  ? expect.objectContaining(objectExpected.payload)
                  : objectExpected.payload,
            })
          );
        });
        test('After being serialized an event should be able to be parsed and used as a parameters for an event constructor', () => {
          expect(
            new BaseDomainEventTestClass(parsedEventWithPayloadSerialized)
          ).toEqual(expect.objectContaining(eventWithPayload));
        });
      });
    });
  });
});
