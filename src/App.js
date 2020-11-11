import React from 'react'
import FuncComp from './FuncComp.js'
import ClassComp from './ClassComp.js'
import './App.css'

function App() {
  return (
    <div className="container">
      <h1>Hello world!</h1>
      <FuncComp></FuncComp>
      <ClassComp></ClassComp>
    </div>
  )
}

export default App
