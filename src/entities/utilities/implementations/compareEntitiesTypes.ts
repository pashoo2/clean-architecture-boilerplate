export function compareEntitiesTypes(
  firstEntityType: string,
  secondEntityType: string
): boolean {
  return String(firstEntityType).trim() === String(secondEntityType).trim();
}
