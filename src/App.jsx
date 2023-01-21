import React from "react"
import Navbar from "./component/NavBar/Navbar"
import {Outlet} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Navbar />
    <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
