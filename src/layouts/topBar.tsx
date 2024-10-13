import { Avatar, Badge, Box, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { deepOrange } from '@mui/material/colors';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const AppBar = () => {
  const [bgColor, setBgColor] = useState('transparent'); // Default background color

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    if (scrollTop > 50) {
      setBgColor('#808080'); // Gray color when scrolling
    } else {
      setBgColor('transparent'); // Original transparent background
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll); // Clean up the event listener
    };
  }, []);

  return (
    <Stack
      direction="row"
      sx={{
        position: 'fixed',
        top: 0,
        height: '8vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: 3, // Horizontal padding
        zIndex: 100,
        transition: 'background-color 0.3s ease-in-out', // Smooth transition
        bgcolor: bgColor, // Dynamically set background color
      }}
    >
      {/* Left Section */}
      <Typography
        variant="h5"
        sx={{ fontWeight: 'bold', color: 'white', whiteSpace: 'nowrap' }}
      >
        โรงพยาบาลนนทบุรี / ห้องฉุกเฉิน
      </Typography>

      {/* Right Section */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
        <Badge color="secondary" badgeContent={9}>
          <NotificationsNoneIcon sx={{ color: 'white' }} />
        </Badge>
        <Avatar sx={{ bgcolor: deepOrange[500], width: 32, height: 32 }}>D</Avatar>
        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', color: 'white', cursor: 'pointer' }}
        >
          Logout
        </Typography>
      </Box>
    </Stack>
  );
};

export default AppBar;
