export function definedOrThrow<V>(v: V): Exclude<V, undefined> {
  if (v === undefined) {
    throw new Error('Value is not defined');
  }
  return v as Exclude<V, undefined>;
}
