/**
 *
 * Main
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { fetchImageStart } from './actions';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMain from './selectors';
import reducer from './reducer';
import saga from './saga';


import Header from 'components/Header';
import Footer from 'components/Footer';
import Content from 'components/Content'

const Wrapper = styled.div`
  width: 1000px;
  margin: 0 auto;
`;

export class Main extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //get params
    const { fetchImageStart } = this.props;
    const params = 'popular'
    fetchImageStart(params);
  }
  render() {
    const { isFetching, images, error } = this.props.main;
    /**

      TODO:
      - images -> array
      - Second todo item

     */
    return (
      <Wrapper>
        <Header />
        {isFetching?
          <p>Loading Now</p>
          :
          <Content images={images} />
        }
        <Footer />
      </Wrapper>
    );
  }
}

Main.propTypes = {
};

const mapStateToProps = createStructuredSelector({
  main: makeSelectMain(),
});

const mapDispatchToProps = dispatch => {
  return {
    fetchImageStart: params => dispatch(fetchImageStart(params))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
