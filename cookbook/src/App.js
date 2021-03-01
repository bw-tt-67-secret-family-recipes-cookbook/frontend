import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home'
const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}
export default App