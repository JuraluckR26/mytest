'use client';
import * as React from 'react';
import { AppBar, Toolbar, Typography, CssBaseline, Drawer, List, ListItemText, Box, Divider, IconButton, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; 
import { styled } from '@mui/system';
import Sidenav from '@/material/examples/Sidenav';
import brandWhite from '../material/assets/images/logo-ct.png'
import brandDark from '../material/assets/images/logo-ct-dark.png'
import routes from 'routes.js'
import { setMiniSidenav, useMaterialUIController } from '@/material/context';

function MyDrawerComponent() { 
  const [onMouseEnter, setOnMouseEnter] = React.useState(false);
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    direction,
    layout,
    openConfigurator,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  return (
    <>
      <Sidenav
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
        brandName="Material Dashboard 2"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
    </>
  );
}

export default MyDrawerComponent; 

