/*
 *
 * Auth actions
 *
 */

import * as ActionTypes from './constants';


/*====================================================
=            login Action creator            =
====================================================*/
export function requestTokenStart() {
  return {
    type:ActionTypes.REQUEST_TOKEN_START
  }
}

function requestTokenSuccess(token) {
  return {
    type:'',
    token
  }
}

// https://www.flickr.com/services/oauth/authorize?oauth_token=72157626737672178-022bbd2f4c2f3432


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



