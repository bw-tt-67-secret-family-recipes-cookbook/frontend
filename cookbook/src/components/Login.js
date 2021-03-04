import axios from 'axios'
import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'


const initial = {
    username:'',
    password:'',
}


function Login(props){

    const [credentials, setCredentials] = useState(initial);
    const {values, submit, change, disabled, errors} = props


        
    
    const onChange = evt => {
    const { name, value } = evt.target;
    setCredentials({
        ...credentials,
        [evt.target.name]: evt.target.value
    });
    change(name, value);
    }

    const history = useHistory()

    const onSubmit = evt => {
        evt.preventDefault()
        axios

            .post('https://tt67recipes.herokuapp.com/api/users/login', credentials)
            .then( response =>{
                console.log(response)
                localStorage.setItem('token', response.data.token)
                history.push(`/${response.data.data[0].user_id}/recipe`)


            })
            .catch(error => {
                console.log(error)
            })

        }


    
      

    return(
        <form onSubmit={onSubmit}>
        <div>
            <h1>Login</h1>
            <h2>Welcome Back!</h2>

            <div>{errors.username}</div>
            <div>{errors.password}</div>

            <label>Username
                <input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                />
            </label>
            
            <label>Password
                <input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
            </label>

            <button>Login</button>
            <button >Home</button>

        </div>    
        </form>
        
    )

}


export default Login;
