import axios from 'axios'

const instance = axios.create({
  //baseURL: 'http://localhost:5001/clone-c76e9/us-central1/api',
  baseURL: 'https://us-central1-clone-c76e9.cloudfunctions.net/api',
})

export default instance
