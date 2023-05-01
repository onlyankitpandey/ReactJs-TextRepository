import React, { useState, useEffect, useContext } from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  AppBar,
  Box,
  Toolbar,
  makeStyles,
  IconButton,
  Badge,
  Typography,
  Avatar,
  Divider,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.paper,
  },
  toolbar: {
    height: 80,
    "& .MuiIconButton-root": {
      padding: "0px",
    },
  },
  logo: {
    marginRight: theme.spacing(2),
  },
  logo1: {
    width: "164px",
    cursor: "pointer",
    height: "30px",
    paddingLeft: "16px",
    "@media (max-width: 1279px)": {
      display: "none",
    },
  },

  handleDialog: {
    "@media (max-width:500px)": {
      minwidth: "200px",
    },
    "& .MuiDialog-paperScrollPaper": { maxHeight: "78vh" },
    "& .walletheading": {
      width: " 500px",
      margin: 0,
      display: "flex",
      alignItems: " center",
      justifyContent: "space-between",
      borderBottom: " 1px solid #cecece",
      padding: " 5px",
      paddingBottom: "20px",
      fontSize: "14px",
      color: "#000",
      position: "relative",
      [theme.breakpoints.down("md")]: {
        width: " 100%  ",
      },
      "& span": {
        position: "absolute",
        bottom: 3,
        right: 5,
        fontSize: "12px",
        color: "#9e9e9e",
      },
    },
    "& .notificationexpand": {
      textAlign: "center",
    },
    "& .MuiDialogContent-root": {
      "@media (max-width:500px)": {
        width: "307px",
      },
      "@media (max-width:380px)": {
        width: "250px",
      },
      "@media (max-width:350px)": {
        width: "210px",
      },
    },
    "& .MuiDialogActions-root": {
      display: "flex",
      justifyContent: "center",
    },
    "& .MuiDialog-container": {
      position: "absolute",
      right: 1,
      top: "6%",
    },
    "& .MuiDialog-scrollPaper": {
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
    },
  },
  namePlace: {
    "& .MuiDialog-container": {
      maxHeight: "78%",
      minWidth: "214",
    },
  },
  handleShow: {
    display: "block",
  },
  divide: {
    height: "45px",
    margin: "0 32px",
    [theme.breakpoints.down("xs")]: {
      margin: "0px 10px",
    },
  },
  btn: {
    "& .MuiIconButton-root": {
      padding: "12px",
      [theme.breakpoints.down("xs")]: {
        padding: "4px",
      },
    },
  },
  text: {
    fontSize: "15px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "13px",
    },
  },
}));

const TopBar = ({ className, onMobileNavOpen, ...rest }) => {
  const classes = useStyles();

  return (
    <AppBar className={clsx(classes.root, className)} color="default" {...rest}>
      <Toolbar className={classes.toolbar}>
        <TopBarData />
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string,
};
TopBar.defaultProps = {
  onMobileNavOpen: () => { },
};

export default TopBar;

export function TopBarData(props) {
  const classes = useStyles();
  const [openSearch, setopenSearch] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleCloseSearch = () => {
    setopenSearch(false);
  };

  const history = useHistory();

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open1) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]); //eslint-disable-line

  const logOut = () => {
    history.push("/login");
    window.localStorage.removeItem("token");
  };

  return (
    <>
      <img
        src="images/dashboard_logo.png"
        alt="sfsdg"
        className={classes.logo1}
        onClick={() => history.push("/")}
      />

      <Box flexGrow={1} />
      <Divider orientation="vertical" className={classes.divide} style={{}} />
      <Typography variant="body1" style={{ color: "#fff" }}>
        Ankit Pandey
      </Typography>
      <IconButton onClick={() => history.push("/edit-profile")}>
        <Badge className={classes.namePlace} color="secondary">
          <Avatar
            src="/images/photo.png"
            style={{ color: "white" }}
          />
        </Badge>
      </IconButton>
    </>
  );
}
