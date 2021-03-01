import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import SignupForm from './components/SignupForm'
import axios from 'axios'
import *as yup from 'yup'
import formSchema from './formSchema'

const initialFormValues = {
    username: '',
    password: '',
    passwordConfirm: '',
    accept: false 
  }
  const initialFormErrors = {
    username: '',
    password: '',
    passwordConfirm: '',
    accept: false
  }
  const initialRecipes = []
  const initialDisabled = true

const App = () => {

    const [ recipes, setRecipes ] = useState(initialRecipes)
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)
    
    const getRecipes = () => {
      axios
        .get('https://tt67recipes.herokuapp.com/api/users/:id/recipes')
        .then((res) => {
          console.log(res)
          // setRecipes(res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    
    const postRecipes = newRecipe => {
      axios
        .post('https://tt67recipes.herokuapp.com/api/users/:id/recipes')
        .then((res) => {
          console.log(res)
          // setRecipes(res)
        })
        .catch((err) => {
          console.log(err)
        })
        setFormValues(initialFormValues)
    }
    
    const inputChange = (name, value) => {
      yup
        .reach(formSchema, name)
        .validate(value)
        .then (()=>{
          setFormErrors({...setFormErrors.formErrors, [name]:''})
        })
        .catch((err)=>{
          setFormErrors({...formErrors, [name]: err.errors[0]})
        })
        setFormValues({
          ...formValues, 
          [name]: value
        })
    }
    
    const formSubmit = () => {
      const newRecipe = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
        passwordConfirm: formValues.passwordConfirm.trim(),
        terms: ['accept'].filter(term => formValues[term])
      }
      postRecipes(newRecipe)
    }
    
    useEffect(() => {
      getRecipes()
    }, [])
    
    useEffect(() => {
    formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

  
    return (
        <div>
            <Switch>
                <Route path='/signupform'>
                    <SignupForm 
                    values={formValues}
                    errors={formErrors}
                    disabled={disabled}
                    submit={formSubmit}
                    change={inputChange}
                    />
                </Route>    
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}
export default App