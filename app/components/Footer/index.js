/**
*
* Footer
*
*/

import React from 'react';
import styled from 'styled-components';
import { colorRotate } from 'components/Animation';

const Text = styled.p`
  display: block;
  font-size: 12px;
  > a {
    text-decoration: none;
    animation: ${ colorRotate } 9s infinite;
  }
`;




class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Text>Data from <a href="https://500px.com/" target="_blank">500px</a>Photo copyrights of their respecticve authors</Text>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
