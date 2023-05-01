import _ from "lodash";
import { colors, createMuiTheme, responsiveFontSizes } from "@material-ui/core";
import { softShadows, strongShadows } from "./shadows";
import typography from "./typography";

const baseOptions = {
  direction: "ltr",
  typography,
  overrides: {
    MuiFormGroup: {
      root: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row"
      }
    },
    MuiFormControlLabel: {
      root: {
        background: "transparent",
        marginLeft: "0px"
      }
    },
    MuiPagination: {
      ul: {
        margin: "0",
        display: "flex",
        padding: "0",
        flexWrap: "wrap",
        listStyle: "none",
        alignItems: "center",
        justifyContent: "end",
      },
    },
    MuiTableCell: {
      root: {
        fontSize: "15px !important",
        borderBottom: "transparent",
      },
      head: {
        color: "#fff !important",
        fontWeight: "300",
        lineHeight: "28px",
      },
      body: {
        color: "#fff !important",
      },
    },
    MuiTableContainer: {
      root: {
        width: "100%",
        overflowX: "auto",
        borderLeft: "0.2px solid #c5c1c129",
        borderRight: "0.2px solid #c5c1c129",
      },
    },

    MuiTabs: {
      fixed: {
        width: "100%",
        background: "#000",
      },
    },
    MuiPickersToolbar: {
      toolbar: {
        backgroundColor: "#E59446",
      },
    },
    MuiPickersDay: {
      day: {
        color: "#fff !important",
      },
      daySelected: {
        color: "#fff",
        backgroundColor: " #811793",
        "&:hover": {
          backgroundColor: "#fff",
          color: "#811793",
        },
      },
      dayDisabled: {
        color: "white",
        opacity: "0.3",
      },
    },
    MuiIconButton: {
      root: {
        fontSize: "20px",
        color: "#FFFFFF !important",
        "&:hover": {
          background: "transparent !important ",
        },
      },
    },
    MuiDivider: {
      root: {
        backgroundColor: "#fff !important",
      },
    },
    MuiInput: {
      underline: {
        "&::after": {
          display: "none",
        },
        "&::before": {
          left: "0",
          right: "0",
          bottom: "0",
          content: '"\\00a0"',
          position: "absolute",
          transition:
            "border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
          borderBottom: "1px solid #fff",
          pointerEvents: "none",
        },
      },
    },
    MuiFormControl: {
      root: {
        // width: "100%",
      },
    },
    MuiDialogTitle: {
      root: {
        padding: "0px",
      },
    },
    MuiAccordion: {
      root: {
        // "& .Mui-expanded": {
        //   "&:first-child": {
        //     border: "1px solid #FFF",
        //   },
        // },
      },
    },
    MuiFormLabel: {
      root: { color: "#222" },
      colorSecondary: {
        "&.Mui-focused": {
          color: "#222",
        },
      },
    },
    MuiListSubheader: {
      root: {
        color: "#000000",
        fontSize: "22px !important",
        fontWeight: "600 !important",
        lineHeight: "33px !important",
      },
    },

    MuiOutlinedInput: {
      root: {
        color: "white",
        border: "1px solid #9F9A9A",
      },
      paddingRight: "0px",
      color: "#fff",
      borderColor: "#fff",
      colorSecondary: {
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          color: "#fff",
          borderColor: "#fff",
        },
        "&.Mui-focused": {
          color: "#fff",
        },
        // '&.MuiOutlinedInput-adornedEnd':{
        //   paddingRight:"0px"
        // },
      },
    },

    //calendar
    MuiPickersCalendarHeader: {
      dayLabel: {
        color: "#fff",
      },
      transitionContainer: {
        color: "#fff",
      },
    },

    MuiPaper: {
      outlined: {
        padding: "20px",
        width: "100%",
      },
      root: {
        transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        // backgroundColor: "#0F212E",
        boxShadow: "0px 0px 32px rgba(129, 23, 147, 0.03)",
      },
    },
    MuiSelect: {
      icon: {
        color: "#fff",
      },
    },
    MuiMenuItem: {
      root: {
        color: "#fff",
        fontSize: "16px",
        fontFamily: "'Roboto',sans-serif",
        fontWeight: 500,
        paddingLeft: "15px",
      },
    },
    MuiPopover: {
      root: {
        zIndex: 99999,
      },
    },
    MuiListItem: {
      root: {
        alignItems: "self-start",
      },
      gutters: {
        paddingLeft: 0,
      },
    },
    MuiCheckbox: {
      root: {
        padding: "4px",
        fontSize: "12px",
      },
      colorSecondary: {
        "&.Mui-checked": { color: "#fff !important" },
      },
    },
    //Table

    MuiFormControlLabel: {
      root: {
        paddingBottom: "0",
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        marginLeft: "-15px",
        // margin-right: 16px;
        verticalAlign: "middle",
        marginBottom: "3px",
        background: "rgba(83, 83, 83, 0.91)",
        // width: "165px",
        // -webkit-tap-highlight-color: transparent;
      },
    },
    MuiListItemSecondaryAction: {
      root: {
        right: 0,
      },
    },
    MuiSwitch: {
      switchBase: {
        color: "#00AFA3 !important",
      },
    },
    MuiDialog: {
      scrollPaper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width:767px)": {
          display: "flex",
        },
      },
      container: {
        height: "100%",
      },
      paperScrollPaper: {
        Width: 450,
        maxWidth: "100%",
      },
      paper: {
        overflowY: "unset",
      },
      paperWidthSm: {
        maxWidth: "500px !important",
      },
    },
    MuiInputBase: {
      root: {
        width: "100%",
      },
      input: {
        fontSize: 14,
        color: "#fff",
        height: "1.1876em",
      },
    },
    MuiBackdrop: {
      root: { backgroundColor: "rgba(0, 0, 0, 0.75)" },
    },
    MuiButton: {
      root: {
        "&:hover": {
          backgroundColor: "none",
        },
      },
      containedSecondary: {
        color: "#212226",
        height: "43px",
        padding: "10px 39px !important",
        fontSize: "14px !important",
        lineHeight: "21px",
        borderRadius: "5px",
        background: "transparent !important",
        border: "2px solid #E59446",
        fontWeight: "400",
        "&:hover": {
          background: "#E59446 !important",
          color: "#FFFFFF",
        },
      },

      containedPrimary: {
        color: "#ffff",
        height: "43px",
        padding: "10px 39px !important",
        fontSize: "14px !important",
        lineHeight: "21px",
        borderRadius: "5px",
        background: "#E59446 !important",
        border: "2px solid #E59446",
        fontWeight: "400",
        "&:hover": {
          border: "2px solid #E59446",
          background: "transparent !important",
          color: "#FFFFFF",
        },
      },
      contained: {
        color: "white",
        fontWeight: 500,
        padding: "5px 5px",
        backgroundColor: "",
        color: "#fff",

        "&.Mui-disabled": {
          backgroundColor: "#7e7e7e70 !important",
          color: "#fff !important",
          border: "#7e7e7e70",
        },
      },

      outlinedSizeSmall: {
        padding: "6px 23px",
        fontSize: "16px",
        lineHeight: " 24px",
      },
      root: {
        "&.Mui-disabled": {
          color: "#fff9 !important",
        },
      },
      text: {
        fontFamily: "'Mulish', sans-serif",
      },
      textPrimary: {
        color: "#f5f5f5",
      },
    },
    MuiDrawer: {
      paperAnchorDockedLeft: {
        borderRight: "0",
      },
    },
    MuiMenu: {
      paper: { top: "47px" },
    },

    MuiTypography: {
      colorPrimary: {
        color: "#f5f5f5",
      },
      subtitle1: {
        color: "#fff",
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: " 16px",
        colorSecondary: {
          color: "#8d8989",
        },
      },
    },
    MuiInput: {
      underline: {
        "&::before": {
          display: "none",
        },
        "&::after": {
          display: "none",
        },
      },
    },
  },
};

const themesOptions = [
  {
    name: "LIGHT",
    overrides: {
      MuiFilledInput: {
        root: { backgroundColor: " #f8f7f7", color: "#000" },
      },
      MuiAppBar: {
        colorPrimary: {
          // color: "#fff",
          backgroundColor: "none",
        },
        colorDefault: {
          backgroundColor: "none",
        },
      },
      MuiButton: {
        root: {
          "&:hover": {
            backgroundColor: "none",
          },
        },
        containedSecondary: {
          color: "#212226",
          height: "43px",
          padding: "10px 39px !important",
          fontSize: "14px !important",
          lineHeight: "21px",
          borderRadius: "5px",
          background: "transparent !important",
          border: "2px solid #E59446",

          fontWeight: "400",
          "&:hover": {
            background: "#E59446 !important",
            color: "#FFFFFF",
          },
        },

        containedPrimary: {
          color: "#ffff",
          height: "43px",
          padding: "10px 39px !important",
          fontSize: "14px !important",
          lineHeight: "21px",
          borderRadius: "5px",
          background: "#E59446 !important",
          border: "2px solid #E59446",
          fontWeight: "400",
          "&:hover": {
            border: "2px solid #E59446",
            background: "#212226 !important",
            color: "#FFFFFF",
          },
        },
      },
      MuiOutlinedInput: {
        input: {
          borderRadius: "10px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#000",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
      MuiInputBase: {
        root: {
          backgroundColor: "#212226",
          color: "#000",
        },
        input: {
          fontSize: "16px",
          fontWeight: "400",
          "&::placeholder": {
            opacity: 1,
            color: "#a1a1a1",
          },
        },
      },
    },
    typography: {
      fontFamily: "'K2D', sans-serif",
    },
    palette: {
      type: "light",
      action: {
        active: colors.blueGrey[600],
      },
      background: {
        default: "#f5f5f5",
        disabled: "#1a2c38a1",
        dark: "#1c2025",
        paper: "#212226",
        section: "#D5D7DB",
        subpaper:
          "linear-gradient(180deg, #021431 -89.43%, rgb(2 4 8 / 0%) 50.33%)",
        header: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        brown: "#f5f5f5",
        table: "#545252",
        button: "#212226",
        buttontext: "#FFFFFF",
      },
      primary: {
        main: "#212226",
      },
      secondary: {
        main: "#000",
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600],
      },
    },
    shadows: softShadows,
  },
  {
    name: "DARK",
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          color: "#fff",
          backgroundColor: "#0F212E",
        },
        colorDefault: {
          backgroundColor: "none",
        },
      },
      MuiButton: {
        root: {
          "&:hover": {
            backgroundColor: "none",
          },
        },
        containedSecondary: {
          color: "#FFFFFF",
          height: "43px",
          padding: "10px 39px !important",
          fontSize: "14px !important",
          lineHeight: "21px",
          borderRadius: "5px",
          background: "transparent !important",
          border: "2px solid #E59446",

          fontWeight: "400",
          "&:hover": {
            background: "#E59446 !important",
            color: "#000000",
          },
        },
        containedPrimary: {
          color: "#ffff",
          height: "43px",
          padding: "10px 39px !important",
          fontSize: "14px !important",
          lineHeight: "21px",
          borderRadius: "5px",
          background: "#E59446 !important",
          border: "2px solid #E59446",
          fontWeight: "400",
          "&:hover": {
            border: "2px solid #E59446",
            background: "#0F212E !important",
            color: "#FFFFFF",
          },
        },
      },
      MuiOutlinedInput: {
        input: {
          borderRadius: "10px",
          "&:-webkit-autofill": {
            "-webkit-background-clip": "text !important",
            // transitionDelay: "9999s",
            "caret-color": "transparent",
            "-webkit-box-shadow": "0 0 0 100px transparent inset",
            "-webkit-text-fill-color": "#fff",
          },
          "&:-internal-autofill-selected": {
            color: "#fff",
          },
        },
      },
      MuiInputBase: {
        root: {
          backgroundColor: "#0F212E",
          color: "#fff",
        },
        input: {
          fontSize: "16px",
          fontWeight: "400",
          "&::placeholder": {
            opacity: 1,
            color: "#a1a1a1",
          },
        },
        multiline: {
          // backgroundColor: "#1E1E1E",
          border: "none",
          borderRadius: "10px",
        },
      },
    },
    typography: {
      fontFamily: "'K2D', sans-serif",
    },
    palette: {
      type: "dark",
      action: {
        active: "rgba(255, 255, 255, 0.54)",
        hover: "rgba(255, 255, 255, 0.04)",
        selected: "rgba(255, 255, 255, 0.08)",
        disabled: "rgba(255, 255, 255, 0.26)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        focus: "rgba(255, 255, 255, 0.12)",
      },
      background: {
        default: "#1A2C38",
        dark: "#0F212E",
        paper: "#0F212E",
        section: "#213743",
        subpaper:
          "linear-gradient(180deg, #F1F5FC -89.43%, rgba(241, 245, 252, 0) 19.33%)",
        header: "linear-gradient(180deg, #424344 0%, #232427 100%)",
        brown: "#2B2C31",
        table: "#1A2C38",
        button: "#FFFFFF",
        buttontext: "#0F212E",
      },
      primary: {
        main: "#FFFFFF",
      },
      secondary: {
        main: "rgba(255, 255, 255, 0.5)",
      },
      text: {
        primary: "#e6e5e8",
        secondary: "#adb0bb",
      },
    },
    shadows: strongShadows,
  },
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );

  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
