import React, { useState, useEffect } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fileUpload } from '../../store/middlewares';
import { Spinner } from '../Spinner';

export const UploadFile = ({ styles }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [loader, setLoader] = useState(false)
  const uploadStatus = useSelector(state => state.uploadFileReducer.status);
  const [error, handleError] = useState(false);

  useEffect(() => {
    if (uploadStatus === 200) {
      setLoader(false);
      handleClose();
    }; 
  }, [uploadStatus]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addFile = (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);
      dispatch(fileUpload(formData));
      setLoader(true);
    } else {
      handleError(true);
    }
  }

  const changeHandler = event => {
    const file = event.target.files[0];
    setFile(file);
    handleError(false)
  };

  return (
    <div>
      <Button style={styles} variant="outlined" color="primary" onClick={handleClickOpen}>
        Upload file with films
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Upload File</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Upload file with all interesting films.It's very quick and easy, if you have so much data.
          </DialogContentText>
          <form method="post" encType="multipart/form-data">
            <Button variant="outlined" component="label">
              Upload File
              <input name="file" type="file" accept="text/plain" style={{ display: "none" }} onChange={changeHandler} />
            </Button>
            {file && file.name}
          </form>
          {error && <Typography variant="subtitle1" color="error" >Upload File!</Typography>}
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addFile} color="primary">
            <div style={{display: 'flex'}}>
              {loader ? <Spinner /> : 'Add'}
            </div> 
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
