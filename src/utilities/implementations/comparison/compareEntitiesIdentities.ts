import {isSimpleType} from 'src/utilities/implementations/typeGuards';
import {
  IIdentityMultiValueObject,
  IIdentityValueObjectSimple,
  TIdentityValueObject,
} from 'src/valueObjects/interfaces';

export function compareEntitiesIdentities(
  firstId: TIdentityValueObject,
  secondId: TIdentityValueObject
): boolean {
  const isFirstIdentitySimpleValue = isSimpleType(firstId.value);
  const isSecondIdentitySimpleValue = isSimpleType(secondId.value);

  if (isFirstIdentitySimpleValue !== isSecondIdentitySimpleValue) {
    return false;
  }
  if (isFirstIdentitySimpleValue && isSecondIdentitySimpleValue) {
    return (firstId as IIdentityValueObjectSimple).equalsTo(
      secondId as IIdentityValueObjectSimple
    );
  }
  return (firstId as IIdentityMultiValueObject).equalsTo(
    secondId as IIdentityMultiValueObject
  );
}
