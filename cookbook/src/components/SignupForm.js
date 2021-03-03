import React from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"

function SignupForm(props) {
    const {values, submit, change, disabled, errors} = props

   
    
    const onChange = evt => {
        const { name, value } = evt.target
        change(name, value) 
    }
    const history = useHistory()

  
    
    const onSubmit = evt => {
        evt.preventDefault()
        axios
            .post('https://tt67recipes.herokuapp.com/api/users/login', values)
            .then((response) =>{
                localStorage.setItem("token", JSON.stringify(response.data.payload))
                console.log(response)
                window.location.href ="/login" 

            })
            .catch(error => {
                console.log(error)
            })

        }
    return(
        <form onSubmit={onSubmit}>
            <div>
            <h1>Join us!</h1>

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

            <button>SignUp</button>
            <button>Home</button>

            </div>
        </form>)
}

export default SignupForm