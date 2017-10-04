/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';
import { colorRotate } from 'components/Animation';

const Logo = styled.h1`
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
  animation: ${colorRotate} 9s infinite;
`

const Menu = styled.ul`

`

const MenuItem = styled.li`
`

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Logo>Reactive 500px</Logo>
      </div>
    );
  }
}

Header.propTypes = {

};

export default Header;

