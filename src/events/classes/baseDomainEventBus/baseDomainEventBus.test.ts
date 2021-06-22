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

  it('Should have the "emit" method', () => {
    expect(baseDomainEventBus.emit).toEqual(expect.any(Function));
  });
  it('Should emit an event through an EventEmitter instance it has as a parameter', () => {
    const eventExpectedListener = jest.fn();

    eventEmitterParameter.on(EVENT_EXPECTED_NAME, eventExpectedListener);
    expect(() => baseDomainEventBus.emit(eventTest)).not.toThrow();
    expect(eventExpectedListener).toHaveBeenLastCalledWith(eventTest);
  });
  it('Should have the "emitEventFailed" method', () => {
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
  it('Should have a "subscribeOnFailed" method', () => {
    expect(baseDomainEventBus.subscribeOnFailed).toEqual(expect.any(Function));
  });
  it('Should call a callback passed as the "subscribeOnFailed" method\'s argument whenever an event failed is fired', () => {
    const eventFailedExpectedListener = jest.fn();
    expect(() =>
      baseDomainEventBus.subscribeOnFailed(
        EVENT_EXPECTED_NAME,
        eventFailedExpectedListener
      )
    ).not.toThrow();
    expect(() =>
      baseDomainEventBus.emitEventFailed(eventFailedTest)
    ).not.toThrow();
    expect(eventFailedExpectedListener).toHaveBeenCalledTimes(1);
    expect(eventFailedExpectedListener).toHaveBeenLastCalledWith(
      eventFailedTest
    );
  });
  it('Should not call a callback passed as the "subscribeOnFailed" method\'s argument whenever an event is fired', () => {
    const eventFailedExpectedListener = jest.fn();
    baseDomainEventBus.subscribeOnFailed(
      EVENT_EXPECTED_NAME,
      eventFailedExpectedListener
    );
    expect(() => baseDomainEventBus.emit(eventTest)).not.toThrow();
    expect(eventFailedExpectedListener).toHaveBeenCalledTimes(0);
  });
  it('Should have "subscribeAllEvents"', () => {
    expect(baseDomainEventBus.subscribeAllEvents).toEqual(expect.any(Function));
  });
  test('A listener subscribed with "subscribeAllEvents" should be called if an event or event failed emitted', () => {
    const allEventsListener = jest.fn();
    baseDomainEventBus.subscribeAllEvents(allEventsListener);
    baseDomainEventBus.emit(eventTest);
    baseDomainEventBus.emitEventFailed(eventFailedTest);
    expect(allEventsListener).toBeCalledTimes(2);
    expect(allEventsListener).toHaveBeenCalledWith(eventTest);
    expect(allEventsListener).toHaveBeenCalledWith(eventFailedTest);
  });
  it('Should have the "unsubscribe" method', () => {
    expect(baseDomainEventBus.unsubscribe).toEqual(expect.any(Function));
  });
  it('Should not call a callback function that had been passed as a parameter to the "subscribe" method, if it\'s passed as a parameter for the "unsubscribe" method', () => {
    const eventExpectedListener = jest.fn();
    expect(() =>
      baseDomainEventBus.subscribe(EVENT_EXPECTED_NAME, eventExpectedListener)
    ).not.toThrow();
    expect(() => baseDomainEventBus.emit(eventTest)).not.toThrow();
    expect(eventExpectedListener).toHaveBeenCalledWith(eventTest);
    eventExpectedListener.mockClear();
    expect(() =>
      baseDomainEventBus.unsubscribe(EVENT_EXPECTED_NAME, eventExpectedListener)
    ).not.toThrow();
    expect(() => baseDomainEventBus.emit(eventTest)).not.toThrow();
    expect(eventExpectedListener).not.toHaveBeenCalled();
  });
  it('Should not call a callback function that had been passed as a parameter to the "subscribeOnFailed" method, if it\'s passed as a parameter for the "unsubscribe" method', () => {
    const eventFailedExpectedListener = jest.fn();
    expect(() =>
      baseDomainEventBus.subscribeOnFailed(
        EVENT_EXPECTED_NAME,
        eventFailedExpectedListener
      )
    ).not.toThrow();
    expect(() =>
      baseDomainEventBus.emitEventFailed(eventFailedTest)
    ).not.toThrow();
    expect(eventFailedExpectedListener).toHaveBeenCalledWith(eventFailedTest);
    eventFailedExpectedListener.mockClear();
    expect(() =>
      baseDomainEventBus.unsubscribe(
        EVENT_EXPECTED_NAME,
        eventFailedExpectedListener
      )
    ).not.toThrow();
    expect(() =>
      baseDomainEventBus.emitEventFailed(eventFailedTest)
    ).not.toThrow();
    expect(eventFailedExpectedListener).not.toHaveBeenCalled();
  });
  it('Should have "unsubscribeListenerAllEvents"', () => {
    expect(baseDomainEventBus.unsubscribeListenerAllEvents).toEqual(
      expect.any(Function)
    );
  });
  test('A listener subscribed with "subscribeAllEvents" should not be called if an event or event failed emitted after it was unsubscribed with "unsubscribeListenerAllEvents"', () => {
    const allEventsListener = jest.fn();
    baseDomainEventBus.subscribeAllEvents(allEventsListener);
    baseDomainEventBus.emit(eventTest);
    baseDomainEventBus.emitEventFailed(eventFailedTest);
    expect(allEventsListener).toBeCalledTimes(2);
    expect(allEventsListener).toHaveBeenCalledWith(eventTest);
    expect(allEventsListener).toHaveBeenCalledWith(eventFailedTest);
    baseDomainEventBus.unsubscribeListenerAllEvents(allEventsListener);
    baseDomainEventBus.emit(eventTest);
    baseDomainEventBus.emitEventFailed(eventFailedTest);
    expect(allEventsListener).toBeCalledTimes(2);
  });
});
