import React from 'react'
import Signup from './Signup/Signup'
import { Container } from 'react-bootstrap'
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom" 

import Routes from './Routes'

function App() {
  return (
      <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Router>
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </Router>  
        </div>
      </Container>
  )
}

export default App
