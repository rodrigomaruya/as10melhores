import axios from 'axios'

const api=axios.create({
    baseURL:"https://backend-six-swart.vercel.app"
})

export default api