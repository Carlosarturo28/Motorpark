import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../screens/Home'
import EditVehicle from '../screens/EditVehicle'
import NewVehicle from '../screens/NewVehicle'
import NewBrand from '../screens/NewBrand'

const Routes = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/edit-vehicle' component={EditVehicle}/>
      <Route exact path='/add-vehicle' component={NewVehicle}/>
      <Route exact path='/add-brand' component={NewBrand}/>
      </Switch>
  </main>
)

export default Routes