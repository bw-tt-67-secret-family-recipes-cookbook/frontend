import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import yup from 'yup'

//initial states

const initialFormValues = {
  username: '',
  password: '', 
}
const initialFormErrors = {
  username: '',
  password: '',
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

// const inputChange = (name, value) => {
//   yup
//     .reach(formSchema, name)
//     .validate(value)
//     .then (()=>{
//       setFormErrors({...setFormErrors.formErrors, [name]:''})
//     })
//     .catch((err)=>{
//       setFormErrors({...formErrors, [name]: err.errors[0]})
//     })
//     setFormValues({
//       ...formValues, 
//       [name]: value
//     })
// }

const formSubmit = () => {
  const newRecipe = {
    username: formValues.username.trim(),
    password: formValues.password.trim(),
  }
  postRecipes(newRecipe)
}

useEffect(()=>{
  getRecipes()
}, [])

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
