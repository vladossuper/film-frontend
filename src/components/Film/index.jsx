import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
// import { DeleteIcon } from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { useStyles } from '../../components/Film/useStyles';
import { deleteFilm } from '../../store/middlewares';

export const Film = ({ film }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const deleteItem = _id => {
    dispatch(deleteFilm({ _id }));
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
           <CardActions>
            <Button onClick={() => deleteItem(film._id)}>
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}