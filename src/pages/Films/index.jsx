import React, { useEffect, useState } from 'react';
import { Grid, Snackbar } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../store/middlewares';
import { Spinner } from '../../components/Spinner';
import { NoFilms } from '../../components/NoFilms';
import { Film } from '../../components/Film';
import { SearchAppBar } from '../../components/AppBar';
import { SomethingWrong } from '../../components/SomethingWrong';
import { setFilmStatus } from '../../store/actions';

export const Films = () => {
  const dispatch = useDispatch();
  const status = useSelector(state => state.filmsReducer.status);
  const films = useSelector(state => state.filmsReducer.films);
  const filmsListError = useSelector(state => state.filmsReducer.filmsListError);
  const statusSetFilm = useSelector(state => state.filmsReducer.setFilmStatus);
  const [open, setOpen] = useState(false);

  console.log(filmsListError);
  
  useEffect(() => {
    dispatch(fetchFilms());
    if (statusSetFilm === 302) {
      setOpen(true);
      setTimeout(() => {
        dispatch(setFilmStatus({ status: null }));
        setOpen(false);
      }, 6000);
    }
  }, [dispatch, statusSetFilm]);

  return (
    <>
      <SearchAppBar />
       
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        {!status && filmsListError === false &&  <Spinner />}
        {status === 204 && <NoFilms/>} 
        {status === 200 && films && films.map(film => {
          return (
            <Film key={film._id} film={film} />
          )
        })}
        {filmsListError === true && <SomethingWrong />}
      </Grid>
      
      <Snackbar open={open} autoHideDuration={6000} message="Film already exist" />
    </>
  );
}
