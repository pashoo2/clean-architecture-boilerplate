import {DeepPartial} from 'src/interfaces/common';
import {TServicesList} from 'src/services/interfaces/common/servicesList';
import {IServicesContainer} from 'src/services/interfaces/common/servicesContainer';
import {mergeDeep} from 'src/utilities/implementations/objects';
import {ServicesContainerAbstractClass} from '../../interfaces/abstractClasses/serviceContainerAbstractClass';

export class ServicesContainerBase<L extends TServicesList>
  extends ServicesContainerAbstractClass<L>
  implements IServicesContainer<L>
{
  constructor(private __services: L) {
    super(__services);
    if (!__services) {
      throw new Error('A services list should be passed as a parameter');
    }
  }

  registerServices(updatedServices: DeepPartial<L>): void {
    this.__services = mergeDeep({}, this.__services, updatedServices) as L;
  }
  getServices(): L {
    return this.__services;
  }
  getBoundaryServices<B extends keyof L>(boundaryName: B): L[B] {
    const boundaryServices = this.getServices()[boundaryName];
    if (!boundaryServices) {
      throw new Error('There is no services registered for the boundary');
    }
    return this.getServices()[boundaryName];
  }
}
