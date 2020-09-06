import api from '../lib/apiModule'

let data = {
  "userId": 1,
  "title": "I Like Eggs!",
  "body": "blah, blah, blah..."
}

describe('PUT /posts/{id}', () => {
  test('should update a post', async () => {
    data.body = "body was updated!"
    const response = await api.put('/posts/42', data)

    expect(response.status).toBe(200)
    expect(response.data.body).toBe(data.body)
    expect(response.data.id).toBe(42)
    expect(response.data.title).toBe(data.title)
  })
})

