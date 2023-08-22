// NavigationBar.js
import React from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  TextField
} from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CastConnectedIcon from '@mui/icons-material/CastConnected';

const NavigationBar = () => {
  return (
    <AppBar position="static" width='fit content'>
      <Toolbar>
        <TextField
          // value={searchValue}
          // onChange={(e) => {
          //   setSearchValue(e.target.value)
          //   if (e.target.value === '') {
          //     setHotels(originalHotels)
          //   }
          // }}
          sx={{display:'flex',justifyContent:'flex-end'}}
          variant="outlined"
          label="Search Song"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton 
              // disabled={!searchValue} onClick={handleSearch}
              >
                <SearchOutlinedIcon />
              </IconButton>
            )
          }}
        />
        <IconButton><CastConnectedIcon/></IconButton>
        <IconButton><Avatar src='https://static.thenounproject.com/png/4038155-200.png' sx={{width: 32, height: 32}}></Avatar></IconButton> 

      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
