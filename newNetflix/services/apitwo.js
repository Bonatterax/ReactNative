import axios from 'axios'

const api = axios.create({
    baseURL: 'http://www.omdbapi.com/?apikey=81fd06f3&t='
})

export default api