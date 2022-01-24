export interface IValidator<V> {
    (value: V): void;
}
export interface IValidatorAsync<V> {
    (value: V): Promise<void>;
}
