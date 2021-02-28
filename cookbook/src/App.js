import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './formSchema'
import Register from './Register';

//initial states

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

//main function

function App() {

//slices of state set at initial values

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
    <div className="App">
      <h1>Title of Page</h1>
      <Register 
      values={formValues}
      errors={formErrors}
      disabled={disabled}
      submit={formSubmit}
      change={inputChange}
      />
      { 
        // recipes.map(recipe => {
        // return(
        // <Recipe key={recipe.id} details={recipe}
        // )
        // })
      }
    </div>
  );
}

export default App;
