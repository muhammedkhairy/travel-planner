import { daysRemaining } from '../js/days_countdown';

describe('the function "daysRemaining" should exist', () => {
  test('It should return false', () => {
    expect(daysRemaining).toBeFalsy();
  });
});
