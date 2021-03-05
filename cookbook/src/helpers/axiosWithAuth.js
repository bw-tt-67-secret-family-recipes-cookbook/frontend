import axios from 'axios'

export default function axiosWithAuth() {
    const token =localStorage.getItem('token')

    return axios.create({
        baseURL: 'https://tt67recipes.herokuapp.com',
        headers:{
            Authorization:token
        }
    })
}