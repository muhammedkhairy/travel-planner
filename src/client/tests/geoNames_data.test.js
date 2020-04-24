//grab data from geonames api
import { geoNamesData } from '../js/geoNames_data';

test('', async () => {
  expect.assertions(1);
  const data = await geoNamesData();
  expect(data.date).toEqual(new Date());
});
