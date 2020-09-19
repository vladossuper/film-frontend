import api from '../../api';
import { filmStatus, filmList, deleteStatus } from '../actions';

export const fetchFilms = () => async dispatch => {
  try {
      const response = await api.post({ path: 'get-films'});
      const { status, data } = response;
      const { films } = data;
      dispatch(filmStatus({ status }));
      dispatch(filmList({ films }));
  } catch (err) {
      console.error(err);
  }
};

export const setFilm = ({ title, release_year, format, stars }) => async dispatch => {
  try {
      const response = await api.post({ path: 'set-film', params: { title, release_year, format, stars } });
      const { status } = response;
      if (status === 200) {
          dispatch(await fetchFilms());
      }; 
  } catch (err) {
      console.error(err);
  }
};

export const deleteFilm = ({ _id }) => async dispatch => {
  try {
      const response = await api.post({ path: 'delete-film', params: { _id } });
      const { status } = response;
      if (status === 200) {
          dispatch(await fetchFilms());
      };
      dispatch(deleteStatus({ status }));
      setTimeout(() => {
          dispatch(deleteStatus({ status: null }));
      }, 1000);
  } catch (err) {
      console.error(err);
  }
};