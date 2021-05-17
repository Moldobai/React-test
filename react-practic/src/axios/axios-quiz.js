import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-quiz-cbf4c-default-rtdb.firebaseio.com/'
})