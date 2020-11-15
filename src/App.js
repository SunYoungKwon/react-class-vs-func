import React, { useState } from "react"
import FuncComp from "./FuncComp.js"
import ClassComp from "./ClassComp.js"
import "./App.css"

function App() {
  const [funcShow, setFuncShow] = useState(true)
  const [classShow, setClassShow] = useState(true)

  return (
    <div className="container">
      <h1>Hello world!</h1>
      <input type="button" value="remove func" onClick={() => setFuncShow(false)} />
      <input type="button" value="remove class" onClick={() => setClassShow(false)} />
      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  )
}

export default App
