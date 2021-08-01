export interface IUseCaseParameters {
  [key: string]: any;
}

export interface IUseCaseServices {
  [key: string]: any;
}

export interface IUseCaseSync<R, P extends IUseCaseParameters> {
  (parameters: P): R;
}

export interface IUseCaseSync<
  R,
  P extends IUseCaseParameters,
  S extends IUseCaseServices = IUseCaseServices
> {
  (parameters: P, services: S): R;
}

export interface IUseCaseAsync<
  R,
  P extends IUseCaseParameters,
  S extends IUseCaseServices
> {
  (parameters: P, services: S): Promise<R>;
}
