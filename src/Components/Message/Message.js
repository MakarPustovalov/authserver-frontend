import React from 'react';
import { Alert } from 'bootstrap-4-react'
import './Message.scss'

class Message extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.popUp = this.popUp.bind(this)
  }

  componentDidMount() {
    this.setState({message: this.props.message})
  }

  popUp (message) {
    const alert = document.getElementById("alert")
    this.setState({
      message: message
    }, () => {
      alert.style.display = 'flex'
      alert.style.opacity = 1

      setTimeout(() => {
        alert.style.opacity = 0
        setTimeout(() => {alert.style.display = 'flex'}, 300)
      }, 2000)
    })
  }

  render() {

    return (
      <div id="alert">
        <Alert danger>{this.state.message}</Alert>
      </div>
    );
  }
}

export default Message;