import React, { useState, useEffect } from 'react'

const logTextColor = 'color: blue'

export default function FuncComp(props) {
  const [number, setRandomNumber] = useState(props.initNumber)
  const [_date, setDate] = useState((new Date()).toString())

  useEffect(function () {
    console.log('%cfunction => useEffect (componentDidMount)', logTextColor)
    document.title = number

    return function () {
      console.log('%cfunction => useEffect return (componentDidMount)', logTextColor)
    }
  }, [number])

  // 컴포넌트가 생성, 업데이트된 직후 호출
  // side effect(부가적인 작용)
  useEffect(function () {
    console.log('%cfunction => useEffect _date (componentDidMount & componentDidUpdate)', logTextColor)
    document.title = _date

    // 기존 컴포넌트를 지우고 (새로 그리기 전에) 호출
    // cleanup
    return function () {
      console.log('%cfunction => useEffect _date return', logTextColor)
    }
  }, [_date])

  useEffect(function () {
    console.log('%cfunction => useEffect number (componentDidMount & componentDidUpdate)', logTextColor)
    document.title = number

    return function () {
      console.log('%cfunction => useEffect number return', logTextColor)
    }
  }, [number])

  console.log('%cfunction => render', logTextColor)
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
