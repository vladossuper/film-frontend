import api from '../../api';
import { filmStatus, filmList, deleteStatus } from '../actions';

export const fetchAuth = ({ email, password }) => dispatch => {
    api.post({ path: '/login', params: { email, password } })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    })
};

export const fetchFilms = () => dispatch => {
    api.post({ path: 'get-films'})
    .then(response => {
        const { status, data } = response;
        const { films } = data;
        dispatch(filmStatus({ status }));
        dispatch(filmList({ films }));
    })
    .catch(err => {
        console.error(err);
    })
};

export const setFilm = ({ title, release_year, format, stars }) => dispatch => {
    api.post({ path: 'set-film', params: { title, release_year, format, stars } })
    .then(response => {
        const { status } = response;
        if (status === 200) {
            dispatch(fetchFilms());
        } 
    })
    .catch(err => {
        console.error(err)
    })
};

export const deleteFilm = ({ _id }) => dispatch => {
    api.post({ path: 'delete-film', params: { _id } })
    .then(response => {
        const { status } = response;
        if (status === 200) {
            dispatch(fetchFilms());
        }
        dispatch(deleteStatus({ status }));
        setTimeout(() => {
            dispatch(deleteStatus({ status: null }));
        }, 1000);
    })
    .catch(err => {
        console.error(err);
    })
};

export const fetchSearch = ({ search }) => dispatch => {
    api.post({ path: 'search', params: { search } })
    .then(response => {
        const { status, data } = response;
        const { result } = data;
        dispatch(filmStatus({ status }))
        dispatch(filmList({ films: result }));
    })
    .catch(err => {
        console.error(err);
    })
};

// export const 