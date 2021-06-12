import {DeepPartial} from 'src/interfaces/common';
import {TServicesList} from 'src/services/interfaces/common/servicesList';

export interface IServicesContainer<L extends TServicesList> {
  registerServices(services: DeepPartial<L>): void;
  getServices(): L;
  getBoundaryServices<B extends keyof L>(boundaryName: B): L[B];
}
