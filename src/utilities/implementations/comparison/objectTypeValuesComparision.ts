export function areDatesEqual(d1: Date, d2: Date): boolean {
  return (
    d1.getMilliseconds() === d2.getMilliseconds() &&
    d1.toISOString() === d2.toISOString()
  );
}
