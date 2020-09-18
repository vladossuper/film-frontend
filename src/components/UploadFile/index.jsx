import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';

export const UploadFile = ({ styles }) => {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addFile = () => {
    const data = new FormData();
    if (file) {
      data.append(('file', file))
    }
  }

  const changeHandler = event => {
    const file = event.target.files[0];
    setFile(file);
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
            <Button
              variant="outlined"
              component="label"
            >
              Upload File
              <input
                type="file"
                accept="text/plain"
                style={{ display: "none" }}
                onChange={changeHandler}
              />
            </Button>
            {file.name}
          </form>
          
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addFile} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
