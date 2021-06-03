export interface IUseCaseParameters extends Record<string, any> {}

export interface IUseCaseServices extends Record<string, any> {}

export interface IUseCaseSync<R> {
  (parameters: IUseCaseParameters): R;
}

export interface IUseCaseSync<R> {
  (parameters: IUseCaseParameters, services: IUseCaseServices): R;
}

export interface IUseCaseAsync<R> extends IUseCaseSync<Promise<R>> {}
