import fetch from 'isomorphic-unfetch';
import { get } from 'lodash';

import actions from 'src/actions';
import utils from 'src/utils';

const getMarvelsRequest = (data) => {
  return actions.request(data);
};

const getMarvelsSuccess = (data) => {
  return actions.success(data);
};

const getMarvelsError = (error) => {
  return actions.error(error);
};

const getCollectionsRequest = (data) => {
  return actions.collectionsRequest(data);
};

const getCollectionsSuccess = (data) => {
  return actions.collectionsSuccess(data);
};

const getCollectionsError = (error) => {
  return actions.collectionsError(error);
};

export const getMarvels = () => async (dispatch) => {
  dispatch(getMarvelsRequest());

  try {
    const res = await fetch(utils.getFormattedUrl());
    const response = await res.json();
    return dispatch(getMarvelsSuccess(response.data));
  } catch (error) {
    return dispatch(getMarvelsError(error));
  }
};

export const getMarvelCollections = (collectionUris) => async (dispatch) => {
  dispatch(getCollectionsRequest());

  try {
    const [comics, series, stories, events] = await Promise.all([
      await fetch(utils.getFormattedUrl(collectionUris.comics)),
      await fetch(utils.getFormattedUrl(collectionUris.series)),
      await fetch(utils.getFormattedUrl(collectionUris.stories)),
      await fetch(utils.getFormattedUrl(collectionUris.events)),
    ]);

    const responseJson = {
      comics: await comics.json(),
      series: await series.json(),
      stories: await stories.json(),
      events: await events.json(),
    };

    return dispatch(getCollectionsSuccess({
      comics: get(responseJson, 'comics.data.results', []),
      series: get(responseJson, 'series.data.results', []),
      stories: get(responseJson, 'stories.data.results', []),
      events: get(responseJson, 'events.data.results', []),
    }));
  } catch (error) {
    return dispatch(getCollectionsError(error));
  }
};
