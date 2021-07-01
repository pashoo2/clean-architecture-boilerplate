import {compareEntitiesIdentitiesUtility} from 'src/entities/utilities/implementations/compareEntitiesIdentities';
import {
  MultipleIdentityValueObjectClassMock,
  MultipleIdentityValueObjectClassWithComparisonMock,
  SimpleIdentityValueObjectClassMock,
  SimpleIdentityValueObjectClassWithComparisonMock,
} from 'src/__mock__/valueObjects.mock';

describe('Utilities for comparing entities identifiers', () => {
  describe('compareEntitiesIdentitiesUtility', () => {
    const SIMPLE_IDENTITY_DIFFERENT = 'SIMPLE_IDENTITY_DIFFERENT';
    const simpleIdentityDifferent = new SimpleIdentityValueObjectClassMock(
      SIMPLE_IDENTITY_DIFFERENT
    );
    const MULTIPLE_IDENTITY_DIFFERENT = {id: 'MULTIPLE_IDENTITY_DIFFERENT'};
    const multipleIdentityDifferent = new MultipleIdentityValueObjectClassMock(
      MULTIPLE_IDENTITY_DIFFERENT
    );

    const SIMPLE_IDENTITY = 'SIMPLE_IDENTITY';
    const simpleIdentityAlwaysReturnTrueWhileComparing =
      new SimpleIdentityValueObjectClassMock(SIMPLE_IDENTITY);
    const MULTIPLE_IDENTITY = {id: 'MULTIPLE_IDENTITY'};
    const multipleIdentityAlwaysReturnTrueWhileComparing =
      new MultipleIdentityValueObjectClassMock(MULTIPLE_IDENTITY);
    const simpleIdentityWithComparison =
      new SimpleIdentityValueObjectClassWithComparisonMock(SIMPLE_IDENTITY);
    const multipleIdentityWithComparison =
      new MultipleIdentityValueObjectClassWithComparisonMock(MULTIPLE_IDENTITY);

    describe.each([
      simpleIdentityWithComparison,
      multipleIdentityWithComparison,
    ])('Test for identity %p', identity => {
      it('Should return true for equal identities', () => {
        expect(compareEntitiesIdentitiesUtility(identity, identity)).toBe(true);
      });
      it('Should return false for not equal identities', () => {
        expect(
          compareEntitiesIdentitiesUtility(identity, simpleIdentityDifferent)
        ).toBe(false);
      });
    });
    describe.each([
      simpleIdentityAlwaysReturnTrueWhileComparing,
      multipleIdentityAlwaysReturnTrueWhileComparing,
    ])('Test for identity %p', identity => {
      it('Should return true if a value objects return true, event if the identities are not equal', () => {
        if (typeof identity.value === 'object') {
          expect(
            compareEntitiesIdentitiesUtility(
              identity,
              multipleIdentityDifferent
            )
          ).toBe(true);
        } else {
          expect(
            compareEntitiesIdentitiesUtility(identity, simpleIdentityDifferent)
          ).toBe(true);
        }
      });
    });
  });
});
