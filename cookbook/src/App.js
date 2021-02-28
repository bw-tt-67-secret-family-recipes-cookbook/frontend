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
const initialData = []
const initialDisabled = true

//main function

function App() {

//slices of state set at initial values

const [ data, setData ] = useState(initialData)
const [ formValues, setFormValues ] = useState(initialFormValues)
const [ formErrors, setFormErrors ] = useState(initialFormErrors)
const [ disabled, setDisabled ] = useState(initialDisabled)

const getRecipes = () => {
  axios
    .get('https://tt67recipes.herokuapp.com/api/users/:id/recipes')
    .then((res) => {
      console.log(res)
    })

}

  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
