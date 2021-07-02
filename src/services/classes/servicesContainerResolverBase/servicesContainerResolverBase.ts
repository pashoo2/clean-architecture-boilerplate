import {
  IServicesContainer,
  TServicesList,
} from '@root/services/interfaces/common';
import {IServicesContainerResolver} from '@root/services/interfaces/common/servicesContainerResolver';

export class ServicesContainerResolverBase<L extends TServicesList>
  implements IServicesContainerResolver<L>
{
  protected _servicesContainer: IServicesContainer<L> | undefined;

  constructor(
    protected readonly _servicesContainerDefault?: IServicesContainer<L>
  ) {}

  getServicesContainer(): IServicesContainer<L> {
    const servicesContainer = this._getServicesContainerOrDefaultOrUndefined();

    if (!servicesContainer) {
      throw new Error('There is no services container previously set');
    }
    return servicesContainer;
  }

  setServicesContainer(servicesContainer: IServicesContainer<L>): void {
    const {_servicesContainer} = this;

    if (_servicesContainer) {
      throw new Error('A services container has already been set');
    }
    if (!servicesContainer || typeof servicesContainer !== 'object') {
      throw new Error('Services container must be provided');
    }
    this._servicesContainer = servicesContainer;
  }

  protected _getServicesContainerOrDefaultOrUndefined():
    | IServicesContainer<L>
    | undefined {
    const {_servicesContainer, _servicesContainerDefault} = this;
    return _servicesContainer ?? _servicesContainerDefault ?? undefined;
  }
}
