import {IServicesContainer, TServicesList} from '../common';
import {DeepPartial} from '../../../interfaces';

export abstract class ServicesContainerAbstractClass<L extends TServicesList>
  implements IServicesContainer<L>
{
  constructor(protected _services: L) {}

  abstract registerServices(services: DeepPartial<L>): void;

  abstract getServices(): L;

  abstract getBoundaryServices<B extends keyof L>(boundaryName: B): L[B];
}
