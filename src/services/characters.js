import fetch from 'isomorphic-unfetch';
import { get } from 'lodash';

import utils from 'src/utils';
import actions from 'actions/characters';

/* CHARACTERS ACTIONS */
const getCharactersRequest = (data) => {
  return actions.getCharactersRequest(data);
};

const getCharactersSuccess = (data) => {
  return actions.getCharactersSuccess(data);
};

const getCharactersError = (error) => {
  return actions.getCharactersError(error);
};

/* CHARACTERS COLLECTIONS ACTIONS */
const getCharactersCollectionsRequest = (data) => {
  return actions.getCharactersCollectionsRequest(data);
};

const getCharactersCollectionsSuccess = (data) => {
  return actions.getCharactersCollectionsSuccess(data);
};

const getCharactersCollectionsError = (error) => {
  return actions.getCharactersCollectionsError(error);
};

/* SERVICES */
export const getCharacters = () => async (dispatch, getState) => {
  const characters = get(getState(), 'characters.list', []);

  if (characters.length) return;

  dispatch(getCharactersRequest());

  try {
    const res = await fetch(utils.getFormattedUrl('characters'));
    const response = await res.json();
    return dispatch(getCharactersSuccess(response.data));
  } catch (error) {
    return dispatch(getCharactersError(error));
  }
};

export const getCharactersCollections = (characterId) => async (dispatch) => {
  dispatch(getCharactersCollectionsRequest());

  try {
    const [comics, series, stories, events] = await Promise.all([
      await fetch(utils.getFormattedUrl(`characters/${characterId}/comics`)),
      await fetch(utils.getFormattedUrl(`characters/${characterId}/series`)),
      await fetch(utils.getFormattedUrl(`characters/${characterId}/stories`)),
      await fetch(utils.getFormattedUrl(`characters/${characterId}/events`))
    ]);

    const responseJson = {
      comics: await comics.json(),
      series: await series.json(),
      stories: await stories.json(),
      events: await events.json(),
    };

    return dispatch(getCharactersCollectionsSuccess({
      comics: get(responseJson, 'comics.data.results', []),
      series: get(responseJson, 'series.data.results', []),
      stories: get(responseJson, 'stories.data.results', []),
      events: get(responseJson, 'events.data.results', [])
    }));
  } catch (error) {
    return dispatch(getCharactersCollectionsError(error));
  }
};
