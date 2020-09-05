import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'


const api = {
  /**
   * make a get api request
   * @param  {string} path - relative path to api
   * @return {json} - the response
   */
  async get(path) {
    const response =  await axios.get(`${baseUrl}${path}`)
    .catch(error => console.error(error))
    return response
  }
}
export default api