import EventEmitter from 'events';
import {BaseDomainEventBus} from 'src/events/classes/baseDomainEventBus/baseDomainEventBus';
import {IDomainEvent, IDomainEventFailed} from 'src/events/interfaces';

const EVENT_EXPECTED_NAME = 'EVENT_EXPECTED_NAME' as const;
const EVENT_FAILED_NAME = `failed::${EVENT_EXPECTED_NAME}` as const;

describe('BaseDomainEventBus', () => {
  type TEventsListTest = {
    EVENT_EXPECTED_NAME: IDomainEvent<typeof EVENT_EXPECTED_NAME>;
  };

  let eventEmitterParameter: EventEmitter;
  let baseDomainEventBus: BaseDomainEventBus<
    TEventsListTest,
    typeof eventEmitterParameter
  >;
  let eventTest: IDomainEvent<typeof EVENT_EXPECTED_NAME>;
  let eventFailedTest: IDomainEventFailed<typeof eventTest>;

  beforeEach(() => {
    eventEmitterParameter = new EventEmitter();
    baseDomainEventBus = new BaseDomainEventBus(eventEmitterParameter);
    eventTest = {
      name: EVENT_EXPECTED_NAME,
      id: 'EVENT_EXPECTED_NAME_ID',
      metaVersion: 1,
      payload: undefined,
      serialize: () => '',
    };
    eventFailedTest = {
      name: EVENT_FAILED_NAME,
      failedEvent: eventTest,
      error: new Error(),
    };
  });

  it('Should have "emit" method', () => {
    expect(baseDomainEventBus.emit).toEqual(expect.any(Function));
  });
  it('Should emit an event through an EventEmitter instance it has as a parameter', () => {
    const eventExpectedListener = jest.fn();

    eventEmitterParameter.on(EVENT_EXPECTED_NAME, eventExpectedListener);
    expect(() => baseDomainEventBus.emit(eventTest)).not.toThrow();
    expect(eventExpectedListener).toHaveBeenLastCalledWith(eventTest);
  });
  it('Should have "emitEventFailed" method', () => {
    expect(baseDomainEventBus.emitEventFailed).toEqual(expect.any(Function));
  });
  it('Should emit a failed event through an EventEmitter instance it has as a parameter', () => {
    const eventFailedExpectedListener = jest.fn();

    eventEmitterParameter.on(EVENT_FAILED_NAME, eventFailedExpectedListener);
    expect(() =>
      baseDomainEventBus.emitEventFailed(eventFailedTest)
    ).not.toThrow();
    expect(eventFailedExpectedListener).toHaveBeenLastCalledWith(
      eventFailedTest
    );
  });
  it('Should have "subscribe" method', () => {
    expect(baseDomainEventBus.subscribe).toEqual(expect.any(Function));
  });
  it('Should call a callback passed as the "subscribe" method\'s argument whenever an event is fired', () => {
    const eventExpectedListener = jest.fn();
    baseDomainEventBus.subscribe(EVENT_EXPECTED_NAME, eventExpectedListener);
    expect(() => baseDomainEventBus.emit(eventTest)).not.toThrow();
    expect(eventExpectedListener).toHaveBeenCalledTimes(1);
    expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
  });
  it('Should not call a callback passed as the "subscribe" method\'s argument whenever a failed event is fired', () => {
    const eventExpectedListener = jest.fn();
    baseDomainEventBus.subscribe(EVENT_EXPECTED_NAME, eventExpectedListener);
    expect(() =>
      baseDomainEventBus.emitEventFailed(eventFailedTest)
    ).not.toThrow();
    expect(eventExpectedListener).toHaveBeenCalledTimes(0);
  });
  // TODO
});
