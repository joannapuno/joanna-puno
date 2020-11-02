import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-burger-builder-10f18.firebaseio.com/'
})

export default instance;