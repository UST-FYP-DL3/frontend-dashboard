import React from 'react'

import { Container } from 'react-bootstrap'

import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Layout from './layout/Layout'
import Signup from './Signup/Signup'
import Login from './Login/Login'
import PrivateRoute from "./PrivateRoute"

function App() {
  return (

    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Layout} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
        </Switch>              
      </AuthProvider>
    </Router>  
        
  )
}

export default App

/*
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>

        </div>
      </Container>
*/
