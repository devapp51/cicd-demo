const request = require('supertest');
const app     = require('./app');

test('GET / returns 200', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.body.message).toContain('Hello');
});

test('GET /health returns ok', async () => {
  const res = await request(app).get('/health');
  expect(res.body.status).toBe('ok');
});