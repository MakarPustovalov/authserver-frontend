import React, { Component } from 'react';
import { Container, Row, Col } from 'bootstrap-4-react'
import { Link, Redirect } from 'react-router-dom'
import Message from './Message/Message';
import fetchData from '../api/fetchData'

class Profile extends Component {
  constructor() {
    super()
    this.state = {
      userData: '',
      isLogged: true
    }
    this.message = React.createRef();
    this.logOutHandler = this.logOutHandler.bind(this)
  }

  componentDidMount() {
    fetchData('http://localhost:4000/profile', 'GET').then(response => {
      let isLogged = !!response.isLogged
      console.log(response)

      this.setState({
        userData: response.data,
        isLogged: isLogged
      })
    })
  }

  logOutHandler() {
    fetchData('http://localhost:4000/auth/logout', 'GET').then((response) => {
      let isLogged = !!response.isLogged

      this.setState({
        isLogged: isLogged
      })
    })
  }

  render() {
    return (
      <>
        <Container>
          {this.state.isLogged ? 
            <Row>
              <Col col="6">
                <h1 className="title">Welcome, {this.state.userData.username}!</h1>
                <p className="p-line">Date of registration: {this.state.userData.date}</p>
                <p className="p-line">User id: {this.state.userData.id}</p>
                <p className="p-line"><a href="#" onClick={this.logOutHandler}>Log Out</a></p>
              </Col>
            </Row>
            :
            <Redirect to="/unathorized" />
          }
        </Container>
      </>
  );
  }
}

export default Profile;
