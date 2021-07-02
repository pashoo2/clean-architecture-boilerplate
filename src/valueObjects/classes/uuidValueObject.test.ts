import {UuidValueObject} from '@root/valueObjects/classes/uuidValueObject';

const VALID_UUID_V4 = [
  '2a17485a-e133-4424-a890-d7d3b6aa861e',

  '64ed54e8-58f4-4cec-9f1a-dedd14981d76',

  'd06a5aca-2581-4d3e-936f-431ee5382a28',

  '64f4756a-dfa4-4654-ba67-3da3a75fca3b',
];

const INVALID_UUID_V4 = [
  '2a17485a-e133-4424-a890-d7d3b6aa861',

  '64ed54e8-58f4-4cec-9f1a-3333',

  'd06a5aca-2581-4d3e-9999-431ee5382a212',
  '',
  0 as any,
];

describe('UuidValueObject', () => {
  it.each(VALID_UUID_V4)('Should not throw for "%s"', validUUIDV4String => {
    expect(() => {
      new UuidValueObject(validUUIDV4String);
    }).not.toThrow();
  });
  it.each(INVALID_UUID_V4)('Should throw for "%s"', invalidUUIDV4String => {
    expect(() => {
      new UuidValueObject(invalidUUIDV4String);
    }).toThrow();
  });
});
