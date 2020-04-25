const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);

describe('api', () => {
  describe('get /weatherURL', () => {
    it('should return a 200', () => {
      supertest(app)
        .get('/weatherURL')
        .then((res) => {
          expect(res.statusCode).toBe(200);
        });
    });
  });
});

it('Gets the /all endpoint', async (done) => {
  const response = await request.get('/weatherURL');
  expect(response.body).toStrictEqual({});
  done();
});
