import { DeepPartial } from '../../../interfaces/common';
import { TServicesList } from '../../../services/interfaces/common/servicesList';
import { IServicesContainer } from '../../../services/interfaces/common/servicesContainer';
import { ServicesContainerAbstractClass } from '../../interfaces/abstractClasses/serviceContainerAbstractClass';
export declare class ServicesContainerBase<L extends TServicesList> extends ServicesContainerAbstractClass<L> implements IServicesContainer<L> {
    private __services;
    constructor(__services: L);
    registerServices(updatedServices: DeepPartial<L>): void;
    getServices(): L;
    getBoundaryServices<B extends keyof L>(boundaryName: B): L[B];
}
