/**
*
* SignIn
*
*/

import React from 'react';
import styled from 'styled-components';

class SignIn extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    const username = this.refs.username
    const password = this.refs.password
    const creds = { username: username.value.trim(), password: password.value.trim() }
    // this.props.onLoginClick(creds)
    console.log(creds);
  }
  render() {
    return (
      <div>
        <input type='text' ref='username' placeholder='Username' />
        <input type='text' ref='username' placeholder='Password' />
        <button onClick={e => this.handleClick(e)}>Login</button>
      </div>
    );
  }
}

SignIn.propTypes = {

};

export default SignIn;
