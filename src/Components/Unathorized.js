import React from 'react';
import { Link } from 'react-router-dom'

const Unathorized = () => {
  return (
    <>
      <h2 className="title">You are not logged in</h2>
      <p className="p-line">
        <Link to='auth/login' className="link">Please, log in</Link>
      </p>
      <p className="p-line">
        <Link to='auth/register' className="link">Or register</Link>
      </p>
    </>
  );
}

export default Unathorized;
