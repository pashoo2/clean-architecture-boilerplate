import {ServicesContainerResolverBase} from 'src/services/classes/servicesContainerResolverBase/servicesContainerResolverBase';
import {IServicesContainer} from 'src/services/interfaces/common';

describe('Services container resolver base class', () => {
  let servicesContainer: IServicesContainer<any>;

  beforeEach(() => {
    servicesContainer = {
      registerServices: jest.fn(),
      getServices: jest.fn(),
      getBoundaryServices: jest.fn(),
    };
  });
  it('Should not throw if constructor is called without parameters', () => {
    expect(() => {
      new ServicesContainerResolverBase();
    }).not.toThrow();
  });
  test('"getServicesContainer" should throw if a service container was not set previously', () => {
    const serviceContainerResolver = new ServicesContainerResolverBase();
    expect(() => serviceContainerResolver.getServicesContainer()).toThrow();
  });
  test('"getServicesContainer" should return service container set as default', () => {
    const serviceContainerResolver = new ServicesContainerResolverBase(
      servicesContainer
    );
    expect(serviceContainerResolver.getServicesContainer()).toBe(
      servicesContainer
    );
  });
  test('"getServicesContainer" should return service container set by "setServicesContainer"', () => {
    const serviceContainerResolver = new ServicesContainerResolverBase();
    serviceContainerResolver.setServicesContainer(servicesContainer);
    expect(serviceContainerResolver.getServicesContainer()).toBe(
      servicesContainer
    );
  });
  test('"getServicesContainer" should return service container set by "setServicesContainer" instead of a default', () => {
    const serviceContainerResolver = new ServicesContainerResolverBase({
      ...servicesContainer,
    });
    serviceContainerResolver.setServicesContainer(servicesContainer);
    expect(serviceContainerResolver.getServicesContainer()).toBe(
      servicesContainer
    );
  });
});
