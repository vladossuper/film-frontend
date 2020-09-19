import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { useStyles } from './useStyles';
import { AddModal } from '../AddModal';
import { Search } from '../Search';
import { UploadFile } from '../UploadFile';

export const SearchAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Films Search
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Search />
          </div>
          <AddModal styles={{ color: '#fff', borderColor: '#fff', marginRight: 10 }} />
          <UploadFile styles={{ color: '#fff', borderColor: '#fff' }} />
        </Toolbar>
      </AppBar>
    </div>
  );
};
