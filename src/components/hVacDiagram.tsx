import React from 'react';

interface TextBoxOnImageProps {
  rectX: number;
  rectY: number;
  rectWidth: number;
  rectHeight: number;
  fontSize: number;
  textColor: string;
  bgColor: string;
  value: { label: string; data: string; dataColor: string }[]; // Array of label and data objects

}

const HVacDiagram: React.FC<TextBoxOnImageProps> = ({
  rectX,
  rectY,
  rectWidth,
  rectHeight,
  fontSize,
  textColor,
  bgColor,
  value,

}) => {
  return (
    <g>
      {/* Rectangle with white frame line */}
      <rect
        x={rectX}
        y={rectY}
        width={rectWidth}
        height={rectHeight}
        fill={bgColor}
        stroke="white"      // White border line
        strokeWidth={2}     // Border width
        rx={5}              // Rounded corners
        ry={5}              // Rounded corners
      />

      {value.map((item, index) => (
        <text
          key={index}
          x={rectX + 15} // Starting x position for the text
          y={rectY + fontSize + 15 + (index * fontSize * 1.2)} // Calculate y position for each line
          fontSize={fontSize}
          fill={textColor}
        >
          <tspan fill={textColor}>{item.label} </tspan>
          {/* Calculate the width of the label text to position the data to the right */}
          <tspan
            fill={item.dataColor} // You can set a specific color for data
            x={rectX + rectWidth - 15} // Align data to the right
            textAnchor="end" // Align the text to the end
          >
            {item.data}
          </tspan>
        </text>
      ))}
    </g>
  );
};

export default HVacDiagram;
