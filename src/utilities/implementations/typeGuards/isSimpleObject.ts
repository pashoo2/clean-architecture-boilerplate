export function isSimpleObject(o: any): o is {} {
  return Boolean(o && typeof o === 'object' && o.constructor === Object);
}
