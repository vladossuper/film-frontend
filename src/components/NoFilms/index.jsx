import React from 'react';
import { Card, CardContent, CardActions, Typography, Grid } from '@material-ui/core';
import { AddModal } from '../AddModal';

export const NoFilms = () => {
  return (
    <Grid
      container
      direction="column"
      alignContent='center'
      justify="center"
      style={{ minHeight: '90vh'}}
    >
      <Grid item>
        <Card>
          <CardContent>
            <Typography align='center' variant="h5" component="h2">
              No Films
            </Typography>
            <Typography align='center' color="textSecondary" gutterBottom>
              Add some films
            </Typography>
          </CardContent>
          <CardActions>
            <AddModal color="primary" />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  )
}