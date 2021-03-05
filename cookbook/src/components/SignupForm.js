import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

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
    const Wrapper = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to left, #aa6639, white);
    `
    const Form = styled.form`
        background: url(https://videohive.img.customer.envatousercontent.com/files/2e6a7460-1df5-4651-9ac2-622670174f98/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=a53bf67b7db29ada57d832a1f308ba3c) no-repeat center center fixed;
        color: white;
        text-shadow: 1px 3px 3px brown;
        font-weight: bold; 
        display: flex;
        justify-content: center;
        align-items: center;
        height: 600px;
        width: 600px;
    `
    const Middle = styled.div``

    const Title = styled.h1``

    const Meat = styled.div`
        display: flex;
        flex-direction: row;
    `
    const Label = styled.div``
    
    const Input = styled.input`
        background: tan;
    `

    const ButtonWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin-left: 25%;
    `

    const Signup = styled.button`
        margin: 2rem;
        padding: 1rem 2rem;
        background: #aa6639;
        color: white;
        font-weight: bold; 
        border: none;
        transition: .25s ease-in-out;

        &:hover {
            cursor: pointer;
            background: sienna;
            color: #aa6639;
        }
    `
    const Home = styled.button`
        margin: 2rem;
        padding: 1rem 2rem;
        background: #aa6639;
        color: white;
        font-weight: bold; 
        border: none;
        transition: .25s ease-in-out;

        &:hover {
            cursor: pointer;
            background: sienna;
            color: #aa6639;
        }
    `

   


    return(
        <Wrapper>
            
        <Form onSubmit={onSubmit}>
        <Middle>
            
            <Title>Join us!</Title>

            <div>{errors.username}</div>
            <div>{errors.password}</div>
        <Meat>
            <Label>Username
                <Input
                    value={values.username}
                    onChange={onChange}
                    name='username'
                    type='text'
                />
            </Label>

            <Label>Password
                <Input
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='text'
                />
            </Label>
        </Meat>
        <ButtonWrapper>
            <Signup onClick={routeToLogin}>SignUp</Signup>
            
            <Home onClick={routeToHome}>Home
            </Home>
        </ButtonWrapper>

            
            </Middle>
        </Form>
        
        </Wrapper>
    )
}

export default SignupForm