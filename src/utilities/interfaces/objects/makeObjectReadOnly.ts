export interface IMakeObjectReadOnly<O extends Object = Object> {
  (object: O): Readonly<O>;
}
