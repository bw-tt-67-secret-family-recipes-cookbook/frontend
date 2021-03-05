import axios from "axios"


export const axiosWithAuth = () => {
    const token = JSON.parse( localStorage.getItem("token") );

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL:"https://tt67recipes.herokuapp.com"
    });

}
