import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

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

    const Wrapper = styled.div`
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        background: linear-gradient(to left, #aa6639, white);
    `

    const Form = styled.form` 
        background: url(https://www.tastymatters.com/wp-content/uploads/2017/06/cooking-with-copper-cookware-health-4.jpg) no-repeat center center fixed;
        color: white;
        text-shadow: 1px 3px 3px brown;
        font-weight: bold; 
        display: flex;
        justify-content: center;
        align-items: center;
        height: 350px;
        width: 600px;
    `
    const Middle = styled.div``

    const Title = styled.h1``

    const SubTitle = styled.h2``

    const Meat = styled.div`
        display: flex;
        flex-direction: row;
    `
    const Label = styled.div``
    
    const Input = styled.input`
        background: beige;
    `
    const ButtonWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        margin-left: 25%;
    `
    const Login = styled.button`
        margin: 2rem;
        padding: 1rem 2rem;
        background: #aa6639;
        color: white;
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
            <Title>Login</Title>
            <SubTitle>Welcome Back!</SubTitle>

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
            <Login onClick=
            {routeToRecipe}>Login</Login>
            <Home onClick=
            {routeToHome}>Home</Home>
            </ButtonWrapper>
            
            </Middle>    
        </Form>
        </Wrapper>
    )

}

export default Login
