import axios from 'axios'
const API_URL = "https://webchat-api.on5.co.id/"

const http = (token = null) => {
  const headers = token && {
    authorization: `Bearer ${token}`
  }
  return axios.create({
    baseURL: API_URL,
    headers
  })
}

export default http