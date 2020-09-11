import axios from 'axios'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

// add timing
axios.interceptors.request.use(config => {
  config.headers['startTime'] = Date.now()
    return config
})
axios.interceptors.response.use(response => {
  response.headers['endTime'] = Date.now()
    return response
})

const api = {
  /**
   * make a get api request
   * @param  {string} url - relative url to api
   * @return {json} - the response
   */
  async get(url) {
    const response =  await axios.get(url)
    .catch(error => this.handleError(error))
    return response
  },

  /**
   * make a post request
   * @param  {string} url - relative url to api
   * @param  {json} data - request data
   * @return {json} - the response
   */
  async post(url, data, config = {}) {
    const response =  await axios.post(url, data, config)
    .catch(error => this.handleError(error))
    return response
  },

  /**
   * update a post
   * @param  {string} url - relative url to api
   * @param  {json} data - request data
   * @return {json} - the response
   */
  async put(url, data) {
    const response =  await axios.put(url, data)
    .catch(error => this.handleError(error))
    return response
  },

  /**
   * delete a post
   * @param  {string} url - relative url to api
   * @return {json} - the response
   */
  async delete(url) {
    const response =  await axios.delete(url)
    .catch(error => console.error(error))
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