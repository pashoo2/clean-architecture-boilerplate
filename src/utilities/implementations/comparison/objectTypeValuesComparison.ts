export function areDatesEqual(d1: Date, d2: Date): boolean {
  if (!(d1 instanceof Date) || !(d2 instanceof Date)) {
    return false;
  }
  return (
    d1.getMilliseconds() === d2.getMilliseconds() &&
    d1.toISOString() === d2.toISOString()
  );
}
