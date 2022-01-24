import { IServicesContainer, TServicesList } from '../../../services/interfaces/common';
import { IServicesContainerResolver } from '../../../services/interfaces/common/servicesContainerResolver';
export declare class ServicesContainerResolverBase<L extends TServicesList> implements IServicesContainerResolver<L> {
    protected readonly _servicesContainerDefault?: IServicesContainer<L> | undefined;
    protected _servicesContainer: IServicesContainer<L> | undefined;
    constructor(_servicesContainerDefault?: IServicesContainer<L> | undefined);
    getServicesContainer(): IServicesContainer<L>;
    setServicesContainer(servicesContainer: IServicesContainer<L>): void;
    protected _getServicesContainerOrDefaultOrUndefined(): IServicesContainer<L> | undefined;
}
