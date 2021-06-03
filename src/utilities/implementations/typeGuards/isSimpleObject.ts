export function isSimpleObject(o: any): o is {} {
  return typeof o === 'object' && o.constructor === Object;
}
