import axios from 'axios'

export const NasaApi = axios.create({
  baseURL: 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY',
  timeout: 5000
})
