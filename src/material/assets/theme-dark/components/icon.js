import pxToRem from "../functions/pxToRem";


const icon = {
  defaultProps: {
    baseClassName: "material-icons-round",
    fontSize: "inherit",
  },

  styleOverrides: {
    fontSizeInherit: {
      fontSize: "inherit !important",
    },

    fontSizeSmall: {
      fontSize: `${pxToRemm(20)} !important`,
    },

    fontSizeLarge: {
      fontSize: `${pxToRem(36)} !important`,
    },
  },
};

export default icon;
