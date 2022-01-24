export interface IService<R> extends Function {
    (...args: unknown[]): R;
    (): R;
}
export interface IServiceAsync<R> {
    (...args: unknown[]): Promise<R>;
    (): Promise<R>;
}
export interface IClassService {
}
export interface IServiceAggregate {
    [key: string]: IService<unknown> | IServiceAsync<unknown> | IClassService;
}
