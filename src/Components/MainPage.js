import React from 'react';
import { Container } from 'bootstrap-4-react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.webp'
import fetchData from '../api/fetchData'

class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogged: false
    }
  }

  componentDidMount() {
    fetchData('http://localhost:4000/', 'GET').then((response) => {
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
          <h1 className="title">Welcome to my service!</h1>
          <p className="p-line">
            <img src={logo} alt="" className="logo"/>
          </p>
          {this.state.isLogged ? 
            <>
              <p className="p-line info">You are currently logged in.</p>
              <p className="p-line"><Link to='/profile' className="link">Go to profile</Link></p>
            </>
            :
            <>
              <p className="p-line">
                <Link to='auth/login' className="link">Please, log in</Link>
              </p>
              <p className="p-line">
                <Link to='auth/register' className="link">Or register</Link>
              </p>
            </>
          }
        </Container>
      </>
    );
  }
}

export default MainPage;