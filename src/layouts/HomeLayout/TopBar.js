import React, { useState, useEffect, useContext } from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Grid,
  Box,
  Container,
  Dialog,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Link, useHistory } from "react-router-dom";
import Logo from "./../../component/Logo";
import Scroll from "react-scroll";
const ScrollLink = Scroll.Link;

const useStyles = makeStyles((theme) => ({
  joinButton: {
    [theme.breakpoints.down("md")]: {
    },
  },
  labeltext: {
    padding: "0em 0em 0.7em",
    fontWeight: "500",
    fontSize: "18px",
    lineHeight: "27px",
    color: "#fff",
    display: "block",
    whiteSpace: "nowrap",
    verticalAlign: "baseline",
    borderRadius: "0.25em",
  },
  dialoginputbox: {
    width: "393px",
    height: "35px",
    border: "2px solid #fff",
    paddingLeft: "10px",
    color: "#fff",
    backgroundColor: "#141414",
    borderRadius: "8px",
    "@media (max-width: 900px)": {
      width: "291px",
    },
  },
  menuButton: {
    fontSize: "15px",
    fontWeight: "400",
    borderRadius: 0,
    minWidth: "auto",
    color: "#fff",
    padding: "0px 15px",
    margin: "0 5px",
    "&.active": {
      color: "#E59446",
    },
    "&[tabIndex]:focus": {
      color: "#E59446",
    },

    "&:hover": {
      color: "#E59446",
    },
    "@media (max-width: 1400px)": {
      fontSize: "15px",
    },
    "@media (max-width: 1280px)": {
      fontStyle: "normal",
      fontSize: "15px",
      letterSpacing: "-0.6px",
      lineHeight: "24px",
      color: "#FFF",
      padding: "7px 15px !important",
      height: "33px",
      width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "flex-start",
    },
  },
  toolbar: {
    display: "flex",
    padding: "20px 0",
    justifyContent: "space-between",
    "@media (max-width: 900px)": {
      paddingLeft: "75px",
      paddingRight: "20px",
    },
  },
  maindrawer: {
    height: "100%",
    background: "#0c0731",
    width: "260px",
  },
  logoDrawer: {
    paddingLeft: "10px",
    width: "200px",
    marginBottom: "15px",
  },
  drawerContainer: {
    padding: "20px 0px ",
    height: "100%",
    background: "#1a1a1a",
    width: "260px",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawericon: {
    color: "#000",
    position: "absolute",
    top: "-2px",
    right: "-10px",
    fontSize: "25px",
  },
  logoImg: {
    width: "75px",
    margin: " 14px 15px 11px 0px",
    objectFit: "contain",
    "@media (max-width: 500px)": {
      margin: " 11px 1px 3px 0px",
      width: "100px !important",
    },
  },
  containerHeight: {
    height: "100%",
  },
  mainHeader: {
    justifyContent: "space-between",
    padding: "0px",
    minHeight: "60px !important",
  },

  menuLeft: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },
  },
  inerrMenu: {
    display: "flex",
    listStyle: "none",
    padding: "0",
    whiteSpace: "nowrap",
    paddingLeft: "25px",
    alignItems: "center",
    justifyContent: "flex-start",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "block",
      padding: "0",
    },
    "& li": {
      "&.active": {
        background: "red",
      },
    },
  },
  menuul: {
    display: "flex",
    listStyle: "none",
    padding: "0",
    alignItems: "center",
    margin: "0",
    height: "50px",
    justifyContent: "space-between",
    cursor: "pointer",
    [theme.breakpoints.down("md")]: {
      display: "block",
      "& .logoDesk": {
        display: "none",
      },
    },

    "& .buttonRound": {
      width: "41px",
      height: "41px",
      borderRadius: "50%",
      color: "#fff",
      marginLeft: "15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "20px",
      cursor: "pointer",
      border: "2px solid #FFFFFF",
      [theme.breakpoints.down("md")]: {
        marginBottom: "20px",
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "20px",
      },
      "&:hover": {
        background: "#fff",
        color: "#000",
      },
    },
  },
  btnSection: {
    "@media(max-width:1279px)": {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default function Header({ buttonClick }) {
  const classes = useStyles();
  const {
    toolbar,
    menuul,
    drawerContainer,
    drawericon,
    menuLeft,
    logoDrawer,
    containerHeight,
    inerrMenu,
    mainHeader,
    menuButton,
    btnSection,
  } = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1280
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Container className="p-0">
        <Toolbar className={toolbar}>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            style={{ paddingLeft: "0px" }}
          >
            <Grid item xs={12} align="center">
              {" "}
              {menuText}{" "}
            </Grid>
          </Grid>
        </Toolbar>
      </Container>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={mainHeader}>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>
            <img
              className={logoDrawer}
              src="images/logo.svg"
              alt=""
              style={{ width: "63px" }}
            />

            {menuText}
            <div style={{ padding: "16px" }}>{connectBtn}</div>
          </div>
        </Drawer>
        <div>{productLogo}</div>
        <Grid container spacing={0} alignItems="center" justifyContent="center">
          <Grid item xs={10} align="right">
          </Grid>
          <Grid item xs={2} align="right">
            <IconButton
              className={drawericon}
              {...{
                edge: "start",
                color: "inherit",
                "aria-label": "menu",
                "aria-haspopup": "true",
                onClick: handleDrawerOpen,
              }}
            >
              <MenuIcon
                width="60px"
                height="60px"
                style={{ color: "#fff", fontSize: "30px" }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    );
  };

  const productLogo = (
    <Box>
      <Link to="/">
        <Logo className="logoImg" />
      </Link>
    </Box>
  );

  const connectBtn = <Box></Box>;

  const menuText = (
    <nav>
      <ul class={menuul}>
        <Box className={menuLeft}>
          <div className="logoDesk">
            <ScrollLink
              className={menuButton}
              smooth={true}
              duration={500}
              to="section1"
            >
              {" "}
              {productLogo}
            </ScrollLink>
          </div>
        </Box>
        <li>
          <li className="activecolor">
            <ul className={inerrMenu}>
              <li>
                {" "}
                <ScrollLink
                  className={menuButton}
                  smooth={true}
                  duration={500}
                  to="home"
                  tabIndex="1"
                  onClick={() => history.push("/?id=home")}
                >
                  {" "}
                  Home{" "}
                </ScrollLink>{" "}
              </li>
              <li>
                {" "}
                <ScrollLink
                  className={menuButton}
                  smooth={true}
                  duration={500}
                  to="contactUs"
                  tabIndex="2"
                  onClick={() => history.push("/contact-us")}
                >
                  {" "}
                  Contact Us{" "}
                </ScrollLink>{" "}
              </li>
              <li>
                {" "}
                <ScrollLink
                  className={menuButton}
                  smooth={true}
                  duration={500}
                  to="aboutUs"
                  tabIndex="3"
                  onClick={() => history.push("/about")}
                >
                  {" "}
                  About{" "}
                </ScrollLink>{" "}
              </li>
              <li style={{ marginLeft: "15px" }}>
                <Button
                  variant="contained"
                  size="medium"
                  color="primary"
                  className={classes.joinButton}
                  onClick={() => history.push("/login")}
                >
                  {" "}
                  Admin
                </Button>
              </li>
            </ul>
          </li>
        </li>
      </ul>
    </nav>
  );

  return (
    <>
      <AppBar className="headerNav" elevation={0}>
        <Container maxWidth="fixed" className={containerHeight}>
          {mobileView ? displayMobile() : displayDesktop()}
        </Container>
      </AppBar>
    </>
  );
}
