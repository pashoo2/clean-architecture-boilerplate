export function copyOwnPropertiesIntoTarget<T extends Object, B extends Object>(
  target: T,
  baseObject: B
): target is T & B {
  Object.getOwnPropertyNames(baseObject).forEach(name => {
    Object.defineProperty(
      target,
      name,
      Object.getOwnPropertyDescriptor(baseObject, name) || Object.create(null)
    );
  });
  return true;
}
