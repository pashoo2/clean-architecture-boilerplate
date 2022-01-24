import { IServicesContainer } from './servicesContainer';
import { TServicesList } from './servicesList';
export interface IServicesContainerResolver<L extends TServicesList> {
    setServicesContainer(servicesContainer: IServicesContainer<L>): void;
    getServicesContainer(): IServicesContainer<L>;
}
