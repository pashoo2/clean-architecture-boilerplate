import { IRunEntityTestsParameters } from '../../../entities/abstractClasses/baseEntity/baseEntity.test';
export interface IRunTestEntityWithDeleteMethod extends IRunEntityTestsParameters {
    deleteMethodName?: string;
}
export declare function runTestEntityWithDeleteMethod<P extends IRunTestEntityWithDeleteMethod>(getTestsParams: () => P): void;
