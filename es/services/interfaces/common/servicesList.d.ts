import { TDomainBoundaryName } from '../../../interfaces/domain';
import { IService, IServiceAggregate } from '../../../services/interfaces/common/service';
export declare type TServicesList = {
    [boundaryName in TDomainBoundaryName]: TServicesList | IServiceAggregate | IService<any>;
};
