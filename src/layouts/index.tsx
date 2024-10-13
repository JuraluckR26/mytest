'use client';
import React, { useState } from 'react';
import { Box, CssBaseline, Icon } from '@mui/material';
import TopBar from '@/layouts/topBar';
import SideBar from '@/layouts/sideBar';
import * as context from '@/context';
import { usePathname } from 'next/navigation';
import { DrawerHeader, Main } from './styles';
import { MaterialUIControllerProvider, setMiniSidenav, setOpenConfigurator, useMaterialUIController } from '@/material/context';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";

import themeDark from "../material/assets/theme-dark";
import themeDarkRTL from "../material/assets/theme-dark/theme-rtl";
import brandDark from "../material/assets/images/logo-ct-dark.png";
import brandWhite from "../material/assets/images/logo-ct.png";

import { CacheProvider } from '@emotion/react';
import themeRtl from '@/material/assets/theme/theme-rtl';
import Sidenav from '@/material/examples/Sidenav';
import Configurator from '@/material/examples/Configurator';
import MDBox from '@/material/components/MDBox';
import theme from '@/themes';
import routes from 'routes.js';

interface LayoutProps {
  children: React.ReactNode;
  pathname?: string;
}

const Index: React.FC<LayoutProps> = ({ children }) => {
  const { navRoute } = context.useContexts();
  const pathname = usePathname();  // Get current path
  const [open] = useState(navRoute);

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
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const [rtlCache, setRtlCache] = useState(null);
  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);

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
  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  const hideNavBarPaths = ['/login', '/register'];

  if (hideNavBarPaths.includes(pathname)) {
    return <>{children}</>;
  }

  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  const configsButton = (
    <MDBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="3.25rem"
      height="3.25rem"
      bgColor="white"
      shadow="sm"
      borderRadius="50%"
      position="fixed"
      right="2rem"
      bottom="2rem"
      zIndex={99}
      color="dark"
      sx={{ cursor: "pointer" }}
      onClick={handleConfiguratorOpen}
    >
      <Icon fontSize="small" color="inherit">
        settings
      </Icon>
    </MDBox>
  );

  // return (
  //   <Box sx={{ display: 'flex' }}>
  //     <BrowserRouter>
  //       <MaterialUIControllerProvider>
  //         <ThemeProvider theme={darkMode ? themeDarkRTL : themeRTL}>
  //           <CssBaseline />
  //           <TopBar/>
  //           <SideBar />
  //           <Main open={open}>
  //             <DrawerHeader />
  //             {children}
  //           </Main>
  //         </ThemeProvider>
  //       </MaterialUIControllerProvider>
  //     </BrowserRouter>
  //   </Box>
  // );
  return direction === "rtl" ? (
    // <CacheProvider value={rtlCache}>
      <ThemeProvider theme={darkMode ? themeDarkRTL : themeRtl}>
        <CssBaseline />
        {layout === "dashboard" && (
          <>
            <Sidenav
              color={sidenavColor}
              brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
              brandName="Material Dashboard 2"
              routes={routes}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
            />
            <Configurator />
            {configsButton}
          </>
        )}
        {layout === "vr" && <Configurator />}
        <Routes>
          {getRoutes(routes)}
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </ThemeProvider>
    // </CacheProvider>
  ) : (
    <ThemeProvider theme={darkMode ? themeDark : theme}>
      <CssBaseline />
      {layout === "dashboard" && (
        <>
          <Sidenav
            color={sidenavColor}
            brand={(transparentSidenav && !darkMode) || whiteSidenav ? brandDark : brandWhite}
            brandName="Material Dashboard 2"
            routes={routes}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          />
          <Configurator />
          {configsButton}
        </>
      )}
      {layout === "vr" && <Configurator />}
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default Index;
