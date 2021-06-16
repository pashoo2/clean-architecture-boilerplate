import {
  DomainEventClass,
  IDomainEventClassServices,
  TDomainEventClassParameters,
} from 'src/events/classes/domainEvent/domainEvent';

describe('Domain event', () => {
  const UNIQUE_EVENT_IDENTITY = 'unique id';
  const EVENT_NAME = 'DomainEventClassTest';
  let services: IDomainEventClassServices;
  const parametersWithoutPayload: TDomainEventClassParameters<undefined> = {
    metaVersion: 1,
  };
  const parametersWithPayload: Omit<TDomainEventClassParameters<{}>, 'id'> = {
    payload: {},
  };

  class DomainEventClassTest extends DomainEventClass<any> {
    protected _name = EVENT_NAME;
  }

  beforeEach(() => {
    services = {
      getUniqueIdentifierString: () => UNIQUE_EVENT_IDENTITY,
    };
  });
  describe.each([parametersWithPayload, parametersWithoutPayload])(
    'Parameters %p',
    constructorParameters => {
      let domainEvent: DomainEventClassTest;
      describe('DomainEventClass', () => {
        beforeEach(() => {
          domainEvent = new DomainEventClassTest(
            constructorParameters,
            services
          );
        });
        it('Should have the "name" property', () => {
          expect(domainEvent.name).toEqual(EVENT_NAME);
        });
        it('Should have the "id" property', () => {
          expect(domainEvent).toHaveProperty('id');
        });
        test('The "id" property should be equal to a value returned by the "getUniqueIdentifierString" service', () => {
          expect(domainEvent.id).toEqual(UNIQUE_EVENT_IDENTITY);
        });
        if ((constructorParameters as any).payload) {
          it('Should have the "payload" property equals to a value passed in a parameters', () => {
            expect(domainEvent.payload).toEqual(
              (constructorParameters as any).payload
            );
          });
        } else {
          it('Should have the "payload" property equals to the "undefined"', () => {
            expect(domainEvent.payload).toEqual(undefined);
          });
        }
        if ((constructorParameters as any).metaVersion) {
          it('Should have the "metaVersion" property equals to a value passed in a parameters', () => {
            expect(domainEvent.metaVersion).toEqual(
              (constructorParameters as any).metaVersion
            );
          });
        } else {
          it('Should have the "metaVersion" property', () => {
            expect(domainEvent).toHaveProperty('metaVersion');
          });
        }
      });
    }
  );
});
