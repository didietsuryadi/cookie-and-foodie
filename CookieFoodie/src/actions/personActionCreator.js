import * as ActionTypes from './constants'

export const getPerson = results => ({
  type: ActionTypes.GET_PERSON,
  payload: results
});

export const updatePerson = results => ({
  type: ActionTypes.UPDATE_PERSON,
  payload: results
});

export const deletePerson = results => ({
  type: ActionTypes.DELETE_PERSON,
  payload: results
});

export const createPerson = results => ({
  type: ActionTypes.CREATE_PERSON,
  payload: results
});
