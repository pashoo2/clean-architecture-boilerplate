import {TSimpleType, TSimpleObject, TSimpleArray} from './common';

export interface ISerializer<V, S extends TSimpleType> {
  (value: V): S;
}

export interface ISerializerAsync<V, S extends TSimpleType> {
  (value: V): Promise<S>;
}

export interface ISerializable<S extends TSimpleType> {
  serialize(): S;
}

export interface ISerializableAsync<S extends TSimpleType> {
  serialize(): Promise<S>;
}

export type TPropertySerializable = ISerializable<string> | TSimpleType;

interface ISerializableSimpleObject {
  [key: string]: TSerializableSimple;
}

export type TSerializableSimple =
  | TSimpleObject
  | TSimpleType
  | TSimpleArray
  | ISerializableSimpleObject
  | Date
  | Number
  | String
  | {
      toString(): TSerializableSimple;
    };

export interface IParsable<S extends TSimpleType, P extends unknown> {
  parse(serialized: S): P;
}

export interface IParsableAsync<S extends TSimpleType, P extends unknown>
  extends IParsable<S, Promise<P>> {}

interface ISerializableObject {
  [key: string]: TSerializableValue;
}

export type TSerializableValue = {} | TSimpleType | ISerializableObject;
