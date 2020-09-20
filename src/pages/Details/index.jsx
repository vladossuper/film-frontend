import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { filmDetails } from '../../store/middlewares';
import * as actions from '../../store/actions';
import { Spinner } from '../../components/Spinner';
import { SearchAppBar } from '../../components/AppBar';
import { Grid, Button } from '@material-ui/core';
import { Film } from '../../components/Film';
import { NoDetails } from '../../components/NoDetails';
import { SomethingWrong } from '../../components/SomethingWrong';

export const Details = () => {
  const location = useLocation();
  const history = useHistory();
  const pathname = location.pathname.split('/');
  const _id = pathname[pathname.length - 1];
  const dispatch = useDispatch();
  const details = useSelector(state => state.filmsReducer.details);
  const status = useSelector(state => state.filmsReducer.detailsStatus);
  const detailsError = useSelector(state => state.filmsReducer.detailsError);

  useEffect(() => {
    dispatch(filmDetails({ _id }));
    return () => {
      dispatch(actions.detailsError(false));
      dispatch(actions.details({ film: null }))
    }
  }, [dispatch, _id]);

  return (
    <>
      <SearchAppBar />
      <Grid
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justify='center'
        style={{ minHeight: '90vh' }}
      >
        {!status && <Spinner />}
        {details && (
          <>
            <Film film={details} />
            <Button onClick={() => history.push('/')}>
              Back to home
            </Button>
          </>
          
        )}
        {status === 204 && <NoDetails />}
        {detailsError && <SomethingWrong />}
      </Grid>
    </>

  )
}