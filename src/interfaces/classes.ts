export type Constructor<T = any, CArgs extends any[] = any[]> = new (
  ...args: CArgs
) => T;
