import {ServicesContainerBase} from '@root/services/classes/servicesContainerBase/servicesContainerBase';

describe('ServicesContainerBase', () => {
  test('Constructor should throw an error if no parameters passed', () => {
    expect(() => {
      new (ServicesContainerBase as any)();
    }).toThrow();
  });
  test('Constructor should not throw an error if parameter passed into', () => {
    expect(() => {
      new ServicesContainerBase({});
    });
  });
  test('Method "getServices" should return services list passed into constructor', () => {
    const servicesList = {};
    const servicesContainer = new ServicesContainerBase(servicesList);
    expect(servicesContainer.getServices()).toBe(servicesList);
  });
  test('Method "registerServices" should not throw error if invoked without a parameter', () => {
    const servicesContainer = new ServicesContainerBase({});
    expect(() => {
      servicesContainer.registerServices({} as any);
    }).not.toThrow();
  });
  test('Method "registerServices" should add new services', () => {
    const servicesList = {
      exists: {},
    };
    const servicesListUpdate = {
      update: {},
    };
    const servicesContainer = new ServicesContainerBase(servicesList);

    servicesContainer.registerServices(servicesListUpdate as any);
    expect(servicesContainer.getServices()).toEqual(
      expect.objectContaining({
        ...servicesList,
        ...servicesListUpdate,
      })
    );
  });
  test('Method "registerServices" should replace previous services with new ones', () => {
    const existsService = jest.fn();
    const newService = jest.fn();
    const servicesList = {
      exists: {
        existsService,
      },
    };
    const servicesListUpdate = {
      exists: {
        existsService: newService,
      },
    };
    const servicesContainer = new ServicesContainerBase(servicesList);

    servicesContainer.registerServices(servicesListUpdate);
    expect(servicesContainer.getServices()).toEqual(
      expect.objectContaining({
        ...servicesListUpdate,
      })
    );
  });
  test('Method getBoundaryServices should throw if boundary services are not found', () => {
    const servicesContainer = new ServicesContainerBase({});

    expect(() => {
      (servicesContainer.getBoundaryServices as any)('unknown boundary');
    }).toThrow();
    expect(() => {
      (servicesContainer.getBoundaryServices as any)();
    }).toThrow();
  });
  test('Method getBoundaryServices should return services for boundary with a name passed', () => {
    const boundaryName = 'boundaryName';
    const boundaryServices = {
      service: jest.fn(),
    };
    const servicesList = {
      [boundaryName]: boundaryServices,
    };
    const servicesContainer = new ServicesContainerBase(servicesList);

    expect(servicesContainer.getBoundaryServices(boundaryName)).toBe(
      boundaryServices
    );
  });
  test('Method getBoundaryServices should return updated services for boundary', () => {
    const boundaryName = 'boundaryName';
    const boundaryServices = {
      service: jest.fn(),
    };
    const servicesList = {
      [boundaryName]: boundaryServices,
    };
    const updatedBoundaryServices = {
      service: jest.fn(),
    };
    const servicesContainer = new ServicesContainerBase(servicesList);

    servicesContainer.registerServices({
      [boundaryName]: updatedBoundaryServices,
    });
    expect(servicesContainer.getBoundaryServices(boundaryName)).toEqual(
      expect.objectContaining(updatedBoundaryServices)
    );
  });
});
