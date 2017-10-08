/*
 *
 * Main actions
 *
 */

import * as Actions from './constants';

export function fetchImageStart(params) {
  return {
    type: Actions.FETCH_IMAGE_START,
    params
  };
}

export function fetchImageSucess(data) {
  return {
    type: Actions.FETCH_IMAGE_SUCCESS,
    data
  };
}

export function fetchImageError(error) {
  return {
    type: Actions.FETCH_IMAGE_ERROR,
    error
  };
}

