import React from 'react'

export default function FuncComp(props) {
  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number : {props.initNumber}</p>
    </div>
  )
}
