/*
 *
 * Main reducer
 *
 */

import { fromJS } from 'immutable';
import * as Actions from './constants';

const initialState = fromJS({
  isFetching: false,
  images: [],
  error: ''
});

function mainReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.FETCH_IMAGE_START:
      return state.set('isFetching', false);
    case Actions.FETCH_IMAGE_SUCCESS:
      return state.merge({
        isFetching: false,
        images: action.data
      });
    case Actions.FETCH_IMAGE_ERROR:
      return state.merge({
        isFetching: false,
        error: action.error
      });
    default:
      return state;
  }
}

export default mainReducer;
