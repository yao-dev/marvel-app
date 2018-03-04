import constants from 'constants/characters';

export const getCharactersRequest = (data) => ({
  type: constants.GET_CHARACTERS_REQUEST,
});

export const getCharactersSuccess = (data) => ({
  type: constants.GET_CHARACTERS_SUCCESS,
  payload: data,
});

export const getCharactersError = (getCharactersError) => ({
  type: constants.GET_CHARACTERS_ERROR,
  payload: getCharactersError,
});

export const getCharactersCollectionsRequest = (data) => ({
  type: constants.GET_CHARACTERS_COLLECTIONS_REQUEST,
});

export const getCharactersCollectionsSuccess = (data) => ({
  type: constants.GET_CHARACTERS_COLLECTIONS_SUCCESS,
  payload: data,
});

export const getCharactersCollectionsError = (error) => ({
  type: constants.GET_CHARACTERS_COLLECTIONS_ERROR,
  payload: error,
});

export default {
  getCharactersRequest,
  getCharactersSuccess,
  getCharactersError,
  getCharactersCollectionsRequest,
  getCharactersCollectionsSuccess,
  getCharactersCollectionsError
};
