import {DeepPartial} from '@root/interfaces/common';
import {TServicesList} from '@root/services/interfaces/common/servicesList';

export interface IServicesContainer<L extends TServicesList> {
  registerServices(services: DeepPartial<L>): void;
  getServices(): L;
  getBoundaryServices<B extends keyof L>(boundaryName: B): L[B];
}
