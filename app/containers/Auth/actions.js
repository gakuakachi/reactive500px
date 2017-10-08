/*
 *
 * Auth actions
 *
 */

import * as ActionTypes from './constants';


/*====================================================
=            login Action creator            =
====================================================*/

function requestLogin(creds) {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    // isFetching: true,
    // isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    // isFetching: false,
    // isAuthenticated: true,
    id_token: user.id_token
  }
}

function loginError(message) {
  return {
    type: ActionTypes.LOGIN_FAILURE,
    // isFetching: false,
    // isAuthenticated: false,
    message
  }
}

/*=====  End of login Action creator  ======*/


/*=============================================
=            logout action creator            =
=============================================*/

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    // isFetching: true,
    // isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    // isFetching: false,
    // isAuthenticated: false
  }
}

/*=====  End of logout action creator  ======*/



