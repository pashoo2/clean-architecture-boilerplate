import {TDomainBoundaryName} from '@root/interfaces/domain';
import {
  IService,
  IServiceAggregate,
} from '@root/services/interfaces/common/service';

export type TServicesList = {
  [boundaryName in TDomainBoundaryName]:
    | TServicesList
    | IServiceAggregate
    | IService<any>;
};
