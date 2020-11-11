import React from 'react'

export default class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }

  render() {
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
