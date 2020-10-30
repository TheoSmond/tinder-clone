import axios from 'axios'

const instance = axios.create({
    baseURL:'http://localhost:8001'
    // Heroku APP
    // baseURL:'https://tinder-backend-ts.herokuapp.com'
})

export default  instance;