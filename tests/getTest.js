import api from '../lib/apiModule'

describe('GET /posts', () => {
  test('should get all posts', async () => {
    const response = await api.get('/posts')

    expect(response.status).toBe(200)
    expect(response.data.length).toBeGreaterThan(1)
  })

  test('should get a single post', async () => {
    const response = await api.get('/posts/42')

    expect(response.status).toBe(200)
    expect(response.data.id).toBe(42)
  })

  test('should error with nonexistent id', async () => {
    const response = await api.get('/posts/invalid_id')

    expect(response.status).toBe(404)
  })
})