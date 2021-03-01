import React from 'react'
import { useHistory } from 'react-router-dom'

function SignupForm(props) {
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

    const routeToLogin = () => {
      console.log(history);
      history.push('/login')
    }
    const routeToHome = () => {
      console.log(history);
      history.push('/')
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

            <button onClick={routeToLogin}>SignUp</button>
            <button onClick={routeToHome}>Home</button>

            </div>
        </form>)
}

export default SignupForm