import { IDomainEvent, IDomainEventPropertiesSerialized, TDomainEventPayload } from '../../../events/interfaces/domainEvents';
export interface IBaseDomainEventParametersWithoutPayload {
    id: string;
    metaVersion?: number;
}
export interface IBaseDomainEventParameters<P extends TDomainEventPayload> extends IBaseDomainEventParametersWithoutPayload {
    payload: P;
}
export declare type TBaseDomainEventClassParameters<P extends TDomainEventPayload> = P extends undefined ? IBaseDomainEventParametersWithoutPayload : IBaseDomainEventParameters<P>;
export declare abstract class BaseDomainEventClass<N extends string = string, P extends TDomainEventPayload = undefined> implements IDomainEvent<N, P> {
    get name(): N;
    get metaVersion(): number;
    get payload(): P;
    get id(): string;
    protected abstract _name: N;
    private readonly __metaVersion;
    private readonly __payload;
    private readonly __id;
    constructor(parameters: TBaseDomainEventClassParameters<P>);
    serialize(): string;
    protected _getSerializableObjectRepresentation(): IDomainEventPropertiesSerialized<N, P>;
}
