import {serviceGenerateUniqueIdentifier} from '@root/services/commonBoundaryServices/implementations/serviceGenerateUniqueIdentifier';

describe('serviceGenerateUniqueIdentifier', () => {
  it('Should return a unique string', () => {
    const generatedIdentifiers: string[] = [];
    let idx = 0;
    while (idx < 1000) {
      const newUniqueServiceIdentity = serviceGenerateUniqueIdentifier();
      expect(generatedIdentifiers).not.toEqual(
        expect.arrayContaining([newUniqueServiceIdentity])
      );
      generatedIdentifiers.push(newUniqueServiceIdentity);
      idx += 1;
    }
  });
});
