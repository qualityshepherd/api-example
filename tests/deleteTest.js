import api from '../lib/apiModule'


describe('DELETE /posts/{id}', () => {
  test('should delete a post', async () => {
    const response = await api.delete('/posts/42')

    expect(response.status).toBe(200)
  })
})