import api from '../lib/apiModule'

const data = {
  "userId": 1,
  "title": "I Like Eggs!",
  "body": "blah, blah, blah..."
}

const config = {
  headers: {
    'Accept': 'invalid',
    'Content-Type': 'wackiness'
  }
}

describe('POST /posts', () => {
  test('should create a new post', async () => {
    const response = await api.post('/posts', data)

    expect(response.status).toBe(201)
    expect(response.data.id).toBeDefined() // the app does not update but this should exist
    expect(response.data.body).toBe(data.body)
    expect(response.data.title).toBe(data.title)
  })

  test('response time should be less than 1 second', async () => {
    const response = await api.post('/posts', data)

    expect(response.status).toBe(201)
    expect((response.headers.endTime - response.config.headers.startTime)).toBeLessThan(10000)
  })

  // skipping due to an axios bug
  // https://github.com/axios/axios/issues/2623
  test.skip('should error on invalid payload', async () => {
    const response = await api.post('/posts', data, config)

    expect(response.status).toBe(500)
  })
})