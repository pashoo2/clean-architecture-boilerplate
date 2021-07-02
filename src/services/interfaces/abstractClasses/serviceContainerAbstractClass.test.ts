import {ServicesContainerAbstractClass} from '@root/services/interfaces/common';

describe('ServicesContainerAbstractClass', () => {
  it('Should have protected property "_services" property that returns services passed into constructor', () => {
    const servicesList = {};
    class ServicesContainer extends ServicesContainerAbstractClass<
      typeof servicesList
    > {
      getBoundaryServices(s: any) {
        return this._services as any;
      }
      getServices() {
        return this._services;
      }
      registerServices() {}
    }
    expect(new ServicesContainer(servicesList).getServices()).toBe(
      servicesList
    );
  });
});
