import React from 'react'
import { useHistory } from 'react-router-dom'

function Login(props){
    const {values, submit, change, disabled, errors} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
    const { name, value } = evt.target
    change(name, value)
    }

    const history = useHistory()

    const routeToRecipe = () => {
        console.log(history);
        history.push('/recipe')
    }
    const routeToHome = () => {
        console.log(history);
        history.push('/')
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

            <button onClick=
            {routeToRecipe}>Login</button>
            <button onClick=
            {routeToHome}>Home</button>

        </div>    
        </form>
        
    )

}


export default Login
