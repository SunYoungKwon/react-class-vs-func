import React from 'react'

const logTextColor = 'color: red'

export default class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  // render 직전에 호출
  componentWillMount() {
    console.log('%cclass => componentWillMount', logTextColor)
  }

  // render 직후에 호출
  componentDidMount() {
    console.log('%cclass => componentDidMount', logTextColor)
  }

  // render를 호출해야 하는지 검사
  shouldComponentUpdate(nextProps, nextState) {
    console.log('%cclass => shouldComponentUpdate', logTextColor)
    return true
  }

  // 컴포넌트가 업데이트되기 직전 호출
  componentWillUpdate(nextProps, nextState) {
    console.log('%cclass => componentWillUpdate', logTextColor)
  }

  // 컴포넌트가 업데이트된 직후 호출
  componentDidUpdate(nextProps, nextState) {
    console.log('%cclass => componentDidUpdate', logTextColor)
  }

  render() {
    console.log('%cclass => render', logTextColor)

    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <p>Now : {this.state.date}</p>
        <input type="button" value="random" onClick={
          function () {
            this.setState({ number: Math.random() })
          }.bind(this)
        } />
        <input type="button" value="now" onClick={
          function () {
            this.setState({ date: (new Date()).toString() })
          }.bind(this)
        } />
      </div>
    )
  }
}
