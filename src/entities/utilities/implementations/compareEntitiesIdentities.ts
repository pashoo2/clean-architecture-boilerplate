import {isSimpleType} from '@root/utilities/implementations/typeGuards/index';
import {
  IIdentityMultiValueObject,
  IIdentityValueObjectSimple,
  TIdentityValueObject,
} from '@root/valueObjects/interfaces/index';

export function compareEntitiesIdentitiesUtility(
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
