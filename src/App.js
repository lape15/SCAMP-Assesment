import React from 'react'
import logo from './logo.svg'
import './App.css'
import './styles/app.css'

import { Route, Switch } from 'react-router-dom'
import NavBar from './Components/Nav'
import Home from './Components/Home'
import Test from './Components/Test'
import Country from './Components/Country'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/(|home)/" exact component={Home} />
        <Route path="/test" exact component={Test} />
        <Route
          path="/home/:countrySlug"
          exact
          render={(props) => <Country {...props} />}
        />
      </Switch>
    </div>
  )
}

export default App
