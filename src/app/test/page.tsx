'use client';

import React from 'react';
import { Stack } from '@mui/material';
import Image from 'next/image';

const DiagramMonitor: React.FC = () => {
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="image-container"
        style={{
          position: 'relative',
          display: 'inline-block',
        }}
      >
        {/* Background Image */}
        <Image
          src="/images/HVAC_diagram.jpg" // Replace with your own image path
          alt="Background"
          width="1280"
          height="800"
          style={{ display: 'block' }}
        />

        {/* SVG Animation Overlay */}
        <svg
          width="1280"
          height="800"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            pointerEvents: 'none', // Prevents the SVG from interfering with interactions
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Example animated circle */}
          <circle cx="400" cy="200" r="50" fill="lightblue">
            <animate
              attributeName="r"
              from="20"
              to="50"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>

          {/* Example animated line */}
          <line
            x1="100"
            y1="500"
            x2="1180"
            y2="500"
            stroke="red"
            strokeWidth="5"
          >
            <animate
              attributeName="stroke-dasharray"
              values="0,20;20,20"
              dur="2s"
              repeatCount="indefinite"
            />
          </line>

          {/* Example animated text */}
          <text
            x="640"
            y="750"
            fontSize="24"
            textAnchor="middle"
            fill="black"
          >
            Monitoring System
            <animate
              attributeName="fill"
              values="black; red; black"
              dur="2s"
              repeatCount="indefinite"
            />
          </text>
        </svg>
      </div>
    </Stack>
  );
};

export default DiagramMonitor;
