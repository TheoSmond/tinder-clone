import axios from 'axios'

const instance = axios.create({
    baseURL:'https://tinder-backend-ts.herokuapp.com'
})

export default  instance;