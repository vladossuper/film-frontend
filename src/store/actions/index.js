import * as types from '../types';

export const filmStatus = status => {
  return {
    type: types.FILMS_STATUS,
    payload: status
  }
};

export const filmList = list => {
  return {
    type: types.FILMS_LIST,
    payload: list
  }
};

export const deleteStatus = status => {
  return {
    type: types.DELETE_STATUS,
    payload: status
  }
}