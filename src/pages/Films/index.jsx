import React, { useEffect } from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilms } from '../../store/middlewares';
import { Spinner } from '../../components/Spinner';
import { NoFilms } from '../../components/NoFilms';
import { Film } from '../../components/Film';
import { SearchAppBar } from '../../components/AppBar';

export const Films = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const status = useSelector(state => state.filmsReducer.status);
  const films = useSelector(state => state.filmsReducer.films);

  return (
    <>
      <SearchAppBar />
      {!status  && (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: '100vh' }}
        >
          <Spinner />
        </Grid>
      )} 
      {status === 204 && <NoFilms/>} 
      {status === 200 && films && films.map(film => {
        return (
          <Film key={film._id} film={film} />
        )
      })}
      {/* <Snackbar open={isOpen} autoHideDuration={6000} message='Product was deleted!' anchorOrigin={{ vertical: 'top', horizontal: 'center' }} /> */}
        
        {/* <Alert onClose={handleClose} severity="success">
          Film was deleted!
        </Alert> */}
      
    </>
  );
}