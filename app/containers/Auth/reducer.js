/*
 *
 * Auth reducer
 *
 */

import { fromJS } from 'immutable';
import * as ActionTypes from './constants';

const initialState = fromJS({
    isFetching: false,
    isAuthenticated: false,
    id_token: '',
    message: ''
});

function authReducer(state = initialState, action) {
  switch (action.type) {
    //login reducer
    case ActionTypes.LOGIN_REQUEST:
      return state.set('isFetching', true);
    case ActionTypes.LOGIN_SUCCESS:
      return state.merge({
        isFetching: false,
        isAuthenticated: true
      });
    case ActionTypes.LOGIN_FAILURE:
      return state.merge({
        isFetching: false,
        isAuthenticated: false
      });
    //logout reducer
    case ActionTypes.LOGOUT_REQUEST:
      return state.set('isFetching', true);
    case ActionTypes.LOGOUT_SUCCESS:
      return state.merge({
        isFetching: false,
        isAuthenticated: false
      });
    case ActionTypes.LOGOUT_FAILURE:
      return state.merge({
        isFetching: false,
        isAuthenticated: true
      });
    default:
      return state;
  }
}

export default authReducer;
