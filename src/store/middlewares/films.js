import api from '../../api';
import * as actions from '../actions';

export const fetchFilms = () => async dispatch => {
  try {
    const response = await api.get({ path: 'film/get', params: {}});
    const { status, data } = response;
    const { films } = data;
    dispatch(actions.filmStatus({ status }));
    dispatch(actions.filmList({ films }));
    dispatch(actions.filmListError({ error: false }));
  } catch (err) {
    // console.log('i am here');
    // if (err) {
      dispatch(actions.filmListError({ error: true }));
    // }
    // const { status } = err.response;
    // dispatch(actions.filmStatus({ status }));
  }
};

export const setFilm = ({ title, release_year, format, stars }) => async dispatch => {
  try {
    const response = await api.post({ path: 'film/set', params: { title, release_year, format, stars } });
    const { status } = response;
    if (status === 200) {
        dispatch(fetchFilms());
    }; 
  } catch (err) {
    const { status } = err.response;
    dispatch(actions.setFilmStatus({ status }));
  }
};

export const deleteFilm = ({ _id }) => async dispatch => {
  try {
      const response = await api.post({ path: 'film/delete', params: { _id } });
      const { status } = response;
      if (status === 200) {
        dispatch(fetchFilms());
      };
      dispatch(actions.deleteStatus({ status }));
      setTimeout(() => {
        dispatch(actions.deleteStatus({ status: null }));
      }, 1000);
  } catch (err) {
    const { status } = err.response;
    dispatch(actions.deleteStatus({ status }));

  }
};

export const filmDetails = ({ _id }) => async dispatch => {
  try {
    const response = await api.post({ path: 'film/details', params: { _id } })
    const { status, data } = response;
    const { film } = data;
    dispatch(actions.detailsStatus({ status }));
    dispatch(actions.details({ film }))
  } catch (err) {
    dispatch(actions.detailsError({error: true}));
    dispatch(actions.detailsStatus({ status: 500 }));
  }
}