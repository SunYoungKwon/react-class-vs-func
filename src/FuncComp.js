import React, { useState } from 'react'

export default function FuncComp(props) {
  const [number, setRandomNumber] = useState(props.initNumber)
  const [_date, setDate] = useState((new Date()).toString())

  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input type="button" value="random" onClick={
        function () {
          setRandomNumber(Math.random())
        }
      } />
      <input type="button" value="date" onClick={
        function () {
          setDate((new Date()).toString())
        }
      } />
    </div>
  )
}
