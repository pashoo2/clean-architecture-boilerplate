import {TDomainBoundaryName} from 'src/interfaces/domain';
import {
  IService,
  IServiceAggregate,
} from 'src/services/interfaces/common/service';

export type TServicesList = {
  [boundaryName in TDomainBoundaryName]:
    | TServicesList
    | IServiceAggregate
    | IService<any>;
};
