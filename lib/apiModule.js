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
    .catch(error => {
      // return 4xx/5xx errors so we can test them
      if(error.response) {
        return error.response
      } else {
        // something weird happened :\
        console.log(error)
      }
    })
    return response
  }
}
export default api