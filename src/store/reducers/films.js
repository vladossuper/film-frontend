import * as types from '../types';

const initialState = {
  films: null,
  status: null,
  deleteStatus: null
}

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILMS_LIST: {
      const { films } = action.payload;
      return {
        ...state,
        films
      }
    }
    case types.FILMS_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        status
      }
    }
    case types.DELETE_STATUS: {
      const { status } = action.payload;
      return {
        ...state,
        deleteStatus: status
      }
    }
    default: {
      return state
    }
  }
}
