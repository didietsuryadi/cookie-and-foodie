import * as ActionTypes from './constants'

export const getPosting = results => ({
  type: ActionTypes.GET_POSTING,
  payload: results
});

export const updatePosting = results => ({
  type: ActionTypes.UPDATE_POSTING,
  payload: results
});

export const deletePosting = results => ({
  type: ActionTypes.DELETE_POSTING,
  payload: results
});

export const createPosting = results => ({
  type: ActionTypes.CREATE_POSTING,
  payload: results
});
