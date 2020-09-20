import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch } from 'react-redux';
import { useStyles } from '../../components/Film/useStyles';
import { deleteFilm } from '../../store/middlewares';
import { Link, useHistory  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const Film = ({ film }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const pathname = location.pathname.split('/');
  const currentRoute = pathname[1];

  const deleteItem = _id => {
    dispatch(deleteFilm({ _id }));
    if (currentRoute === 'details') {
      history.push('/');
    }
  };

  return (
    <Grid className={classes.wrapper} container spacing={0} alignContent='center' justify='center'>
      <Grid item xs={5}>
        <Card>
          <CardContent>
            <Typography align='center' className={classes.title} color='textSecondary' gutterBottom>
              {film.title}
            </Typography>
            <Typography className={classes.about} color='textSecondary' gutterBottom>
              Year: {film.release_year}
            </Typography>
            <Typography className={classes.about} color='textSecondary' gutterBottom>
              Format: {film.format}
            </Typography>
            <Typography className={classes.about} color='textSecondary' gutterBottom>
              Stars: {film.stars}
            </Typography>
          </CardContent>
           <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button onClick={() => deleteItem(film._id)}>
              <DeleteIcon  color='error' />
            </Button>
            {currentRoute !== 'details' && (
              <Button>
                <Link to={{ pathname: `/details/${film._id}`, state: { _id: film._id } }}>
                  <InfoIcon color='primary' />
                </Link>
              </Button>
            )}
            
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}