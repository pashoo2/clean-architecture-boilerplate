import { Constructor } from '../../../interfaces/classes';
export declare function createAndInitializeEntity<T>(EntityConstructor: Constructor<T>, ...parameters: ConstructorParameters<typeof EntityConstructor>): T;
