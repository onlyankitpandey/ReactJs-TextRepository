import React, { useState } from "react";
import {
  Grid,
  Box,
  Container,
  Typography,
  makeStyles,
  IconButton,
  Paper,
} from "@material-ui/core";
import { } from "react-feather";
import { Twitter } from "@material-ui/icons";
import TelegramIcon from "@material-ui/icons/Telegram";
import { SiMedium } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import Scroll from "react-scroll";
import { useHistory } from "react-router-dom";
const ScrollLink = Scroll.Link;
const useStyles = makeStyles((theme) => ({
  textFeild: {
    backgroundColor: "#2F2F2F",
    fontFamily: "'Ubuntu', sans-serif",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "10px",
    lineHeight: "11px",
    "& hover": {
      borderRadius: "50px",
    },

    // paddingRight:'0px',
    // padding:"5px 15px 10px 15px",
    borderRadius: "50px",
    // 1borderRadius:"25px",
    "& input": {
      color: "white",
      // backgroundColor:"#2F2F2F"
      padding: "10px 0px 10px 15px",
    },
  },
  footerSection: {
    padding: "60px 0px 60px",
    "& p": {
      [theme.breakpoints.down("md")]: {
        fontSize: "11px !important",
      },
    },
  },

  menuButton: {
    fontSize: "16px",
    color: "rgba(255, 255, 255, 0.6)",
    cursor: "pointer",
    fontWeight: "300",
    display: "block",
    marginTop: "18px",
    lineHeight: "20px",
    "&.active": {
      color: "#E59446",
    },
    "&:hover": {
      color: "#E59446",
    },
    "&[tabIndex]:focus": {
      color: "#E59446",
    },
  },
  icons: {
    maxWidth: "230px",
    [theme.breakpoints.only("xs")]: {
      maxWidth: "430px",
    },
    "& a": {
      padding: "20px 20px 0px 0px",
    },
  },
  socialIcons: {
    color: "#9b9be1",
    "&:hover": {
      color: "#E59446",
    },
  },
  subscribetext: {
    "& p": {
      fontSize: "12px",
      margin: "30px 0 8px",
      color: "#fff",
    },
  },
}));

export default function Liquidity() {
  const history = useHistory();
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.footerSection}>
        <Container>
          <Grid container spacing={2} style={{ alignItem: "center" }}>
            <Grid item lg={4} md={4} sm={4} xs={12}>
              <Box className={classes.subscribetext}>
                <img
                  src="./images/contact.png"
                  alt="Logo"
                  width="100%"
                  style={{ maxWidth: "60px" }}
                />

                <Typography variant="body1">
                  {/* Subscribe for updates and announcements */}
                  Follow us on social media
                </Typography>
                <Box className={classes.icons}>
                  <IconButton target="_blank" href="https://www.facebook.com/">
                    <BsFacebook className={classes.socialIcons} />
                  </IconButton>
                  <IconButton target="_blank" href="https://www.twitter.com/">
                    <Twitter className={classes.socialIcons} />
                  </IconButton>
                  <IconButton target="_blank" href="https://www.telegram.com/">
                    <TelegramIcon className={classes.socialIcons} />
                  </IconButton>
                  <IconButton target="_blank" href="https://www.telegram.com/">
                    <AiFillInstagram className={classes.socialIcons} />
                  </IconButton>
                  <IconButton target="_blank" href="https://medium.com/log-in/">
                    <SiMedium className={classes.socialIcons} />
                  </IconButton>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
              <Box>
                <Typography variant="h6">Features</Typography>
              </Box>

              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
              >
                Lorem Text
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                to="about"
              >
                Lorem Text
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
              >
                Lorem Text
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
              >
                Lorem Text
              </ScrollLink>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
              <Typography variant="h6"> Resources</Typography>

              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Lorem Text
              </ScrollLink>

              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Lorem Text
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Lorem Text
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Lorem Text
              </ScrollLink>
            </Grid>
            <Grid item lg={2} md={2} sm={4} xs={6}>
              <Typography variant="h6">Company</Typography>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                tabIndex="3"
                to="policy"
                onClick={() => history.push("/about")}
              >
                About Us
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                tabIndex="3"
                to="policy"
                onClick={() => history.push("/about")}
              >
                Careers
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                tabIndex="3"
                to="policy"
                onClick={() => history.push("/about")}
              >
                Lorem Text
              </ScrollLink>

              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                to="policy"
                onClick={() => {
                  history.push({
                    pathname: "/contact-us",
                  });
                }}
              >
                Contact Us
              </ScrollLink>
            </Grid>

            <Grid item lg={2} md={2} sm={4} xs={6}>
              <Typography variant="h6">Links</Typography>

              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Lorem Text
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Lorem Text
              </ScrollLink>

              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
              >
                Lorem Text
              </ScrollLink>
              <ScrollLink
                className={classes.menuButton}
                smooth={true}
                duration={500}
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/contact-us")}
              >
                Contact Us
              </ScrollLink>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </>
  );
}
