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
  margin-bottom: 14px;
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
        <Text>
          This App is inspired by <a href="https://github.com/gpbl/isomorphic500" target="_blank">isomorphic500</a>, making with <a href="https://github.com/react-boilerplate/react-boilerplate" target="_blank">react boilerplate</a>.
        </Text>
      </div>
    );
  }
}

Footer.propTypes = {

};

export default Footer;
