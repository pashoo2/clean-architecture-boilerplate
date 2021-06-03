import {DeepPartial} from 'src/interfaces/common';
import {TServicesList} from 'src/services/interfaces/common/servicesList';

export interface IServicesContainer<L extends TServicesList> {
  registerServices(services: DeepPartial<L>): void;
  getServices(): L;
  getBoundaryServices<B extends keyof L>(boundaryName: B): L[B];
}

export abstract class ServicesContainerAbstractClass<L extends TServicesList>
  implements IServicesContainer<L>
{
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(services: L) {}

  abstract registerServices(services: DeepPartial<L>): void;
  abstract getServices(): L;
  abstract getBoundaryServices<B extends keyof L>(boundaryName: B): L[B];
}
