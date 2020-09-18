import React, { useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setFilm } from '../../store/middlewares';
import { useFormValidation } from './useFormValidation';

export const AddModal = ({ color, styles }) => {
  const [open, setOpen] = useState(false);
  const { control, errors, handleSubmit } = useForm();
  const error = useFormValidation(errors);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onSubmit = filmInfo => {
    dispatch(setFilm(filmInfo));
    handleClose();
  }

  return (
    <div>
      <Button variant="outlined" style={styles} color={color} onClick={handleClickOpen}>
        Add interesting film
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add film</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill information about your interesting film.
          </DialogContentText>
          <Controller
            as={TextField}
            style={{ marginTop: 10 }}
            name='title'
            autoFocus
            control={control} 
            onChange={args => args[0].nativeEvent.text} 
            label='Title'
            defaultValue=""
            fullWidth
            error={error.titleError}
            rules={{ required: true }}
            helperText={error.titleError ? "Incorrect entry." : ''}
          ></Controller>
          {/* {errors.title && errors.title.type === 'required' && <div style={{color: 'red', width: '100%'}}>Field is required!</div>} */}
          <Controller
            as={TextField}
            style={{ marginTop: 10 }}
            name='release_year' 
            control={control} 
            onChange={args => args[0].nativeEvent.text} 
            label='Release Year'
            defaultValue=""
            fullWidth
            error={error.releaseYearError}
            rules={{ required: true }}
            helperText={error.releaseYearError ? "Incorrect entry." : ''}
          ></Controller>
           {/* {errors.release_year && errors.release_year.type === 'required' && <div style={{color: 'red', width: '100%'}}>Field is required!</div>} */}
          <Controller
            as={TextField}
            style={{ marginTop: 10 }}
            name='format' 
            control={control} 
            onChange={args => args[0].nativeEvent.text} 
            label='Format'
            defaultValue=""
            fullWidth
            error={error.formatError}
            rules={{ required: true }}
            helperText={error.formatError ? "Incorrect entry." : ''}
          ></Controller>
          {/* {errors.format && errors.format.type === 'required' && <div style={{color: 'red', width: '100%'}}>Field is required!</div>} */}
          <Controller
            as={TextField}
            style={{ marginTop: 10 }}
            name='stars' 
            control={control} 
            onChange={args => args[0].nativeEvent.text} 
            label='Stars'
            defaultValue=""
            fullWidth
            error={error.starsError}
            rules={{ required: true }}
            helperText={error.starsError ? "Incorrect entry." : ''}
          ></Controller>
          {/* {errors.stars && errors.stars.type === 'required' && <div style={{color: 'red', width: '100%'}}>Field is required!</div>} */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSubmit(onSubmit)} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
