import constants from './constants';

export const request = (data) => ({
  type: constants.REQUEST,
  payload: data,
});

export const success = (data) => ({
  type: constants.SUCCESS,
  payload: data,
});

export const error = (error) => ({
  type: constants.ERROR,
  payload: error,
});

export const collectionsRequest = (data) => ({
  type: constants.COLLECTIONS_REQUEST,
  payload: data,
});

export const collectionsSuccess = (data) => ({
  type: constants.COLLECTIONS_SUCCESS,
  payload: data,
});

export const collectionsError = (error) => ({
  type: constants.COLLECTIONS_ERROR,
  payload: error,
});

export default {
  request,
  success,
  error,
  collectionsRequest,
  collectionsSuccess,
  collectionsError
};
