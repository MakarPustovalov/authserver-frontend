import React from 'react';
import { Container, Row, Col, Form, Button  } from 'bootstrap-4-react'
import fetchData from '../api/fetchData'
import { Link } from 'react-router-dom';
import Message from './Message/Message'
import register from '../api/register';

class Register extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogged: false
    }
    this.message = React.createRef()
  }

  componentDidMount() {
    fetchData('http://localhost:4000/', 'GET').then((response) => {

      let isLogged = !!response.isLogged

      this.setState({
        isLogged: isLogged
      })
    })
  }

  registerHandler = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value

    if((!username) || (!password)) {
      return this.message.current.popUp('Username and password both must contain at least 5 symbols')
    }

    register(username, password).then(response => {
      if (!response.ok) {
        this.message.current.popUp(response.message)
      }

      let isLogged = !!response.isLogged

      this.setState({
        isLogged: isLogged
      })
    })
  }

  render () {
    return (
      <>
        <Container>
          <Message ref={this.message}/>
          {this.state.isLogged ? 
            <>
              <h1 className="title">Already logged!</h1>
              <p className="p-line link"><Link to='/'>Back to home</Link></p>
            </>
            :
            <Row>
              <Col col="4">
                <h1 className="title">Registration</h1>
                <Form.Input type="text" placeholder="Username" id="username"/>
                <Form.Input type="password" placeholder="Password" id="password"/>
                <Button primary onClick={this.registerHandler}>Register</Button>
              </Col>
            </Row>
          }
        </Container>
      </>
    );
  }
}

export default Register;
