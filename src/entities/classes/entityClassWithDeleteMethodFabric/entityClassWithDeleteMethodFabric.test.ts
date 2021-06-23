import {DOMAIN_ENTITY_EVENT_NAME_DELETE} from 'src/constants/domainEvents';

// TODO

describe('"$delete" method', () => {
  it('Should have "delete" method', () => {
    expect(typeof entity.delete === 'function').toBe(true);
  });
  it('Should mark the entity as deleted', () => {
    expect(() => entity.delete()).not.toThrow();
    expect(entity.isDeleted).toBe(true);
  });
  it('Should emit "DELETE" event if the entity has not been deleted previously', () => {
    const listenerDeleteEvents = jest.fn();
    (services.domainEventBus as any).subscribe(
      DOMAIN_ENTITY_EVENT_NAME_DELETE,
      listenerDeleteEvents
    );
    expect(() => entity.delete()).not.toThrow();
    if (parameters.isDeleted) {
      expect(listenerDeleteEvents).not.toHaveBeenCalledWith(
        expect.objectContaining({
          entityId: parameters.id,
          name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
        })
      );
    } else {
      expect(listenerDeleteEvents).toHaveBeenCalledWith(
        expect.objectContaining({
          entityId: parameters.id,
          name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
        })
      );
    }
    listenerDeleteEvents.mockClear();
    expect(() => entity.delete()).not.toThrow();
    expect(listenerDeleteEvents).not.toHaveBeenCalledWith(
      expect.objectContaining({
        entityId: parameters.id,
        name: DOMAIN_ENTITY_EVENT_NAME_DELETE,
      })
    );
  });
});
