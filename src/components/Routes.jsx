import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Analytics from '../pages/Analytics'
import Products from '../pages/Products'
import Setting from '../pages/Setting'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/products' component={Products}/>
            <Route path='/setting' component={Setting}/>
        </Switch>
    )
}

export default Routes
