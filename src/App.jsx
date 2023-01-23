import React from "react"
import Navbar from "./component/NavBar/Navbar"
import {Outlet} from 'react-router-dom'
import Footer from "./component/Footer/Footer"
function App() {
  return (
    <div className="App">
    <Navbar />
    <main>
      <Outlet />
    </main>
    <Footer />
    </div>
  )
}

export default App
