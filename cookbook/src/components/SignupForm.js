import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import axios from "axios"

const initialValues = {
    username: '',
    password: '',
  }



function SignupForm(props) {
    const [credentials, setCredentials] = useState(initialValues)
    const {values, submit, change, disabled, errors} = props

    const onChange = evt => {
        const {name, value } = evt.target;
        setCredentials({
            ...credentials,
            [evt.target.name]: evt.target.value,
        });
        change(name, value);
    }
    
    // const onChange = evt => {
    //     const { name, value } = evt.target
    //     change(name, value) 
    // }

    const history = useHistory()
    const routeToMain = () => {
        history.push("/login")
    }
  
    
    const onSubmit = evt => {
        evt.preventDefault()
        axios
            .post('https://tt67recipes.herokuapp.com/api/users/register', credentials)
            .then((response) =>{

                console.log(response.data)
                submit();
                routeToMain();
                


            })
            .catch(error => {
                console.log(error)
            });
            routeToMain()
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