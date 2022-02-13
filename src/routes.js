import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom'

import indetPage from './pages/identificationPage/principal'
import trocoPage from './pages/trocoPage/troco'
export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={indetPage} />
                <Route path="/troco" exact component={trocoPage} />
            </Switch>
        </BrowserRouter>
    )
}