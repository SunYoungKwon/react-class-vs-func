import React from 'react'

export default class ClassComp extends React.Component {
  state = {
    number: this.props.initNumber
  }

  render() {
    return (
      <div className="container">
        <h2>Class Style Component</h2>
        <p>Number : {this.state.number}</p>
        <input type="button" value="random" onClick={
          function () {
            this.setState({ number: Math.random() })
          }.bind(this)
        } />
      </div>
    )
  }
}
