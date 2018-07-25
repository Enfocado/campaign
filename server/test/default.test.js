const request = require('supertest');
const app = require('../index.js');

describe('Test /', () => {
  it('should return status code 200', async () => {
    const response = await request(app).get('/project/1/section/about_components');
    expect(response.statusCode).toBe(200);
  });
  it('should return text hello GET', async () => {
    const response = await request(app).get('/project/1/section/about_components');
    request(app).get('/project/1/section/about_components', (data) => {
      expect(response.text).toBe(data);
    });
  });
});
