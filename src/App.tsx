import { useState } from 'react'

import logo from "./assets/images/logo.svg"

import "./css/App.css"
import FontSelect from './components/FontSelect'
import Entry from './components/Entry'

function App() {
  return (
    <>
      <header>
        <nav>
          <img src={logo} alt="logo" />
          <FontSelect />
        </nav>
        <input id='search-bar' type="text" />
      </header>
      <main>
        <Entry />
      </main>
    </>
  )
}

export default App
