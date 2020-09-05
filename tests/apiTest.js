import api from '../lib/apiModule'

const body = {
  "userId": 1,
  "title": "I Like Eggs!",
  "body": "blah, blah, blah..."
}

describe('GET /posts', () => {
  test('should get all posts', async () => {
    const res = await api.get('/posts')

    expect(res.status).toBe(200)
    expect(res.data.length).toBeGreaterThan(1)
  })
})

