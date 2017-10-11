/**
 *
 * Auth
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAuth from './selectors';
import reducer from './reducer';

import { requestTokenStart } from './actions';

import SignIn from 'components/SignIn';

export class Auth extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestTokenStart();
  }

  render() {
    return (
      <div>
        <SignIn {...this.props} />
      </div>
    );
  }
}

Auth.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  auth: makeSelectAuth(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    requestTokenStart: () => {
      dispatch(requestTokenStart())
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
