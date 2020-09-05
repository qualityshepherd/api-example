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

  test('should error with nonexistent id', async () => {
    const res = await api.get('/posts/invalid_id')

    expect(res.status).toBe(404)
  })
})

describe('POST /posts', () => {
  test('should create a new post', async () => {
    const response = await api.post('/posts', body)

    expect(response.status).toBe(201)
    expect(response.data.id).toBeDefined() // the app does not update but this should exist
    expect(response.data.body).toBe(body.body)
    // expect(response.data.title).toBe(body.title) // bug???
  })
})