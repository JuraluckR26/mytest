'use client';

import HVacDiahram from '@/components/hVacDiagram';
import { Box, FormControlLabel, Stack, styled, Switch, SwitchProps, Typography } from '@mui/material';
import React from 'react';
import data from '@/data/mock.data.json';
import lineConfig from '@/data/line.config.json';
import Image from 'next/image';

const Page = () => {

  const CustomSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: '#65C466',
          opacity: 1,
          border: 0,
          ...theme.applyStyles('dark', {
            backgroundColor: '#2ECA45',
          }),
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.grey[100],
        ...theme.applyStyles('dark', {
          color: theme.palette.grey[600],
        }),
      },

      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.7,
        ...theme.applyStyles('dark', {
          opacity: 0.3,
        }),
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: '#E9E9EA',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
      ...theme.applyStyles('dark', {
        backgroundColor: '#39393D',
      }),
    },
  }));

  return (
    <>
      <Stack direction="row"
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>

        <Stack direction={'row'} sx={{ alignItems: 'center', bgcolor: '#202940' }} borderRadius={2}>
          <Box sx={{ width: '1600', mx: 'auto', }}>
            <Stack
              direction="row"
              sx={{
                justifyContent: "flex-end",
                alignItems: "baseline",
              }}
            >
              {/* SwichBar              */}
              <Stack style={{ position: 'relative', display: 'inline-block' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    bgcolor: '#131826',
                    alignItems: 'center',
                  }}
                  borderRadius={2}
                  pr={2}
                  pl={2}
                  m={2}
                >
                  <Typography variant="h5" sx={{ m: 1 }} color="white">
                    ประเภทห้อง : OR
                  </Typography>

                  <FormControlLabel
                    control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
                    label="Mode Control: "
                    labelPlacement="start"
                    sx={{
                      '.MuiFormControlLabel-label': {
                        fontSize: '1.5rem',
                        color: 'white'
                      }
                    }}
                  />
                  <FormControlLabel
                    control={<CustomSwitch sx={{ m: 1 }} defaultChecked />}
                    label="System Control: "
                    labelPlacement="start"
                    sx={{
                      '.MuiFormControlLabel-label': {
                        fontSize: '1.5rem',
                        color: 'white'
                      }
                    }}
                  />
                </Box>
              </Stack>
            </Stack>
            {/* diagram */}
            
            <Stack
              direction="column"
              spacing={2}
              sx={{
                justifyContent: "center",
                alignItems: "center"
              }}
              mt={1}
            >
              <Stack>
                <div style={{ position: 'relative' }}>
                  <Image
                    src="/images/HVacDiagram.jpg"
                    alt="Background"
                    width="1600"
                    height="1000"
                  />
                  <svg
                    width={1600}
                    height={960}
                    style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}
                  >
                    {data.controls.map((control, index) => (
                      <HVacDiahram
                        key={index}
                        rectX={control.rectX}
                        rectY={control.rectY}
                        rectWidth={control.rectWidth}
                        rectHeight={control.rectHeight}
                        fontSize={control.fontSize}
                        textColor={control.textColor}
                        bgColor={control.bgColor}
                        value={control.values}
                      />
                    ))}

                    {lineConfig.lines.map((line, index) => (
                      <line
                        key={index}
                        x1={line.x1}
                        y1={line.y1}
                        x2={line.x2}
                        y2={line.y2}
                        stroke={line.stroke}
                        strokeWidth={line.strokeWidth}
                        strokeDasharray={line.strokeDasharray}
                      />
                    ))}
                  </svg>
                </div>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack>

          {/* <Tooltip title={showTimeline ? "Hide Timeline" : "Show Timeline"} placement="top">
          <IconButton
            onClick={() => setShowTimeline(!showTimeline)}
            sx={{ ml: 2, mt: 2 }}
          >
            {showTimeline ? <TimelineOutlinedIcon sx={{ color: pink[500] }} /> : <ViewTimelineIcon sx={{ color: pink[500] }} />}
          </IconButton>
        </Tooltip>
        <Drawer
          anchor="right"
          open={showTimeline}
          onClose={() => setShowTimeline(false)}
        >
          <Box
            sx={{
              width: 250,
              bgcolor: 'white',
              borderRadius: 2,
              p: 2,
              height: '100%',
            }}
          >
            <Typography variant="h4" gutterBottom>
              Timeline
            </Typography>
            {HVacTimeline()}
          </Box>
        </Drawer> */}

        </Stack>

      </Stack>
    </>
  );
};

export default Page;
