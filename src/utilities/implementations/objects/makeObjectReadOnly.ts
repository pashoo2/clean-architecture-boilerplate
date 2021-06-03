export function makeObjectReadOnly<O extends Object>(o: O): Readonly<O> {
  return Object.freeze({...o});
}
