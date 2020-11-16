import React, { useState, useEffect } from "react"

const logTextColor = "color: skyblue"

export default function FuncComp(props) {
  const [number, setRandomNumber] = useState(props.initNumber)
  const [_date, setDate] = useState(new Date().toString())

  useEffect(
    function () {
      console.log("%cfunction => useEffect number (componentDidMount & componentDidUpdate)", logTextColor)
      document.title = number

      return function () {
        console.log(
          "%cfunction => useEffect number return (componentDidMount, componentDidUpdate & componentWillUnmount)",
          logTextColor
        )
      }
    },
    [number]
  )

  // 컴포넌트가 생성, 업데이트된 이후 호출
  // side effect(부가적인 작용)
  useEffect(
    function () {
      console.log("%cfunction => useEffect _date (componentDidMount & componentDidUpdate)", logTextColor)
      document.title = _date

      // cleanup
      return function () {
        console.log(
          "%cfunction => useEffect _date return (componentDidMount, componentDidUpdate & componentWillUnmount)",
          logTextColor
        )
      }
    },
    [_date]
  )

  // 두 번째 배열안의 인자들의 상태가 바뀌어야 첫 번째 인자인 콜백함수 호출
  // 빈 배열 전달 시 최초 1회만 실행되고 그 이후에는 실행되지 않음
  useEffect(function () {
    console.log("%cfunction => useEffect (componentDidMount)", logTextColor)

    return function () {
      // 컴포넌트가 삭제될 때 실행
      console.log("%cfunction => useEffect return (componentWillUnMount)", logTextColor)
    }
  }, [])

  console.log("%cfunction => render", logTextColor)
  return (
    <div className="container">
      <h2>Function Style Component</h2>
      <p>Number : {number}</p>
      <p>Date : {_date}</p>
      <input
        type="button"
        value="random"
        onClick={function () {
          setRandomNumber(Math.random())
        }}
      />
      <input
        type="button"
        value="date"
        onClick={function () {
          setDate(new Date().toString())
        }}
      />
    </div>
  )
}
