import api from '../lib/apiModule'

let data = {
  "userId": 1,
  "title": "I Like Eggs!",
  "body": "blah, blah, blah..."
}

describe('POST /posts', () => {
  test('should create a new post', async () => {
    const response = await api.post('/posts', data)

    expect(response.status).toBe(201)
    expect(response.data.id).toBeDefined() // the app does not update but this should exist
    expect(response.data.body).toBe(data.body)
    expect(response.data.title).toBe(data.title)
  })
})