import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import SignupForm from './SignupForm'
import PrivateRoute from './../helpers/PrivateRoute'

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to left, #aa6639, white);
    flex-direction: column;
`

const Title = styled.h1`
    color: white;
`

const MiddleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    height: 70vh;
    box-shadow: 0 5px 10px 0 rgba(0,0,0, .2);
`

const ButtonWrapper = styled.div``

const Signup = styled.button`
    margin: 2rem;
    padding: 1rem 2rem;
    background: #aa6639;
    color: white;
    border: none;
    transition: .25s ease-in-out;

    &:hover {
        cursor: pointer;
        background: white;
        color: #aa6639;
    }
`

const Login = styled.button`
    margin: 2rem;
    padding: 1rem 2.3rem;
    background: #aa6639;
    color: white;
    border: none;
    transition: .25s ease-in-out;

    &:hover {
        cursor: pointer;
        background: white;
        color: #aa6639;
    }
`
const Home = () => {
    
    const history = useHistory()

    const routeToSignup = () => {
      console.log(history);
      history.push('/signupform')
    }
    const routeToLogin = () => {
      console.log(history);
      history.push('/login')
    }

return (
    <Wrapper>
        <Title>Secret Recipes Cookbook</Title>
        <MiddleWrapper>
            <Image src='https://images.unsplash.com/photo-1519148246701-3dc1897a7a21?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' />
        </MiddleWrapper>
        <ButtonWrapper>
            <Signup onClick={routeToSignup} >SignUp</Signup>
            <Login onClick={routeToLogin} >LogIn</Login>
        </ButtonWrapper>
    </Wrapper>
)
}
export default Home