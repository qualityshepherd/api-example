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
    .catch(error => this.handleError(error))
    return response
  },

  /**
   * make a post request
   * @param  {string} path - relative path to api
   * @param  {json} params - request params
   * @return {json} - the response
   */
  async post(path, params) {
    const response =  await axios.post(`${baseUrl}${path}`, {
      body: params.body
    })
    .catch(error => this.handleError(error))
    return response
  },

  /**
   * handle caught errors
   * @param  {json} error - a caught error response
   * @return {json}
   */
  handleError(error) {
    // .response is for 4xx/5xx errors... return them so we can test for them
    if(error.response) {
      return error.response
    } else {
      // something weird happened :\
      console.log(error)
    }
  }
}
export default api