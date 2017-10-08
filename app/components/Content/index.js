/**
*
* Content
*
*/

import React from 'react';
import styled from 'styled-components';


const Div = styled.div`
  width: 100%;
  margin: 30px auto;
`;

class Content extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    const { images } = this.props;
    const imageItems = Object.keys(images).map((value, key) => {
      return <img src={images[value].image_url} />
    });
    return (
      <Div>
        { imageItems }
      </Div>
    );
  }
}

Content.propTypes = {

};

export default Content;
