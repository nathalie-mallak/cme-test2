import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Page1 from './components/page1'
import Page2 from './components/page2'

const App = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Page1} />
                <Route exact path='/Page2' component={Page2} />
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default App
