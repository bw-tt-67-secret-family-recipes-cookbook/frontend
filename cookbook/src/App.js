import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import SignupForm from './components/SignupForm'
import * as yup from 'yup'
import formSchema from './formSchema'
import Login from './components/Login'
import Recipe from './components/Recipe'
import PrivateRoute from './helpers/PrivateRoute'


const initialFormValues = {
    username: '',
    password: '',
  }
  const initialFormErrors = {
    username: '',
    password: '',
  }
  
  const initialDisabled = false

const App = () => {

    
    const [ formValues, setFormValues ] = useState(initialFormValues)
    const [ formErrors, setFormErrors ] = useState(initialFormErrors)
    const [ disabled, setDisabled ] = useState(initialDisabled)
    
    
    
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
      const newUser = {
        username: formValues.username.trim(),
        password: formValues.password.trim(),
      }
      setFormValues(newUser)
    }
    

    
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
                <Route exact path='/login'>
                    <Login 
                    values={formValues}
                    errors={formErrors}
                    disabled={disabled}
                    submit={formSubmit}
                    change={inputChange}
                    />
                </Route>    
               
                  {/* <PrivateRoute exact path='/:id/recipe' component={Recipe}/> */}
                  <Route
        exact
        path="/:id/recipe"
        render={props => <Recipe {...props}/>}/>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
            
        </div>
    )
}
export default App