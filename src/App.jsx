import React, { Component } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { NavbarComponent } from './components'
import { Home, Sukses } from './pages'

export default class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <NavbarComponent />
      <main>
        <Routes>
          <Route path ="/" Component={Home} exact/>
          <Route path ="/sukses" Component={Sukses} />
        </Routes>
      </main>
     </BrowserRouter>
    )
  }
}
