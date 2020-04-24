import { checkDestinationAndDate } from '../js/destination_date';

describe('the function "checkDestinationAndDate" should exist', () => {
  test('It should return false', () => {
    expect(checkDestinationAndDate).toBeFalsy();
  });
});
