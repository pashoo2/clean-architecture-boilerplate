export interface IService<R> extends Function {
  (...args: unknown[]): R;
  (): R;
}

export interface IServiceAsync<R> {
  (...args: unknown[]): Promise<R>;
  (): Promise<R>;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IClassService {}

export interface IServiceAggregate {
  [key: string]: IService<unknown> | IServiceAsync<unknown> | IClassService;
}
