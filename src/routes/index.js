import React from 'react'
import Home from './Home'
import Checkout from './Checkout'
import ProcessingOrder from './ProcessingOrder'
import { Switch, Route, BrowserRouter as Router, withRouter } from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={Home} />
        <Route
          exact
          path="/checkout"
          component={Checkout} />
        <Route
          exact
          path="/orderprocessed"
          component={ProcessingOrder} />
      </Switch>
    </Router>
  )
}

export default withRouter(Routes)
