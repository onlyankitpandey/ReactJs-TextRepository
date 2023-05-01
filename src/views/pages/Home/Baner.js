import React, { useState, useEffect } from "react";
import {
  Container,
  Box,
  makeStyles,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    position: "relative",

    "& .textBox": {
      padding: "150px 0 90px",
      [theme.breakpoints.only("xs")]: {
        padding: "100px 0 40px",
      },
      "& h1": {
        maxWidth: "735px",
        color: theme.palette.primary.main
      },
    },
    "& .bannerImg": {
      maxWidth: "973px",
    },
  },
  iconBox: {
    position: "fixed",
    bottom: "66px",
    right: "3px",
    zIndex: "11111",
  },
  head: {
    [theme.breakpoints.down("sm")]: {
      fontSize: "60px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "38px",
    },
  },
}));
export default function Bannner1() {
  const classes = useStyles();
  const history = useHistory();

  const handleClose = () => { };
  const [ShowTopBtn, setShowTopBtn] = useState();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const handleclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box>
      <Box className={classes.mainbox}>
        <Box align="center">
          <Container>
            <Grid container spacing={2}>
              <Grid item lg={12} xs={12}>
                <Box className="textBox">
                  <Typography variant="h1" className={classes.head} >
                    <span style={{ color: "#811793" }}>All-in-one </span>
                    platfrom for running{" "}
                    <span style={{ color: "#E59446" }}>business</span>
                  </Typography>
                </Box>
                <Box mb={3}>
                  <Button
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={() => history.push("/login")}
                  >
                    Start Now
                  </Button>
                </Box>
                <Box mt={2}>
                  <img
                    src="images/banner.png"
                    alt="image"
                    width="100%"
                    className="bannerImg"
                  />
                </Box>
              </Grid>
            </Grid>

            {/* <Box mt={4}>
              <Button variant="contained" size="large" color="primary">
                Explore
              </Button>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/mint"
                style={{ padding: "10px 49px", marginLeft: "20px" }}
              >
                Mint
              </Button>
            </Box> */}
          </Container>

          <Box display="flex" justifyContent="flex-end">
            {ShowTopBtn && (
              <Box
                className={classes.iconBox}
                style={{
                  width: "100%",
                  maxWidth: "60px",
                  borderRadius: "4px",
                }}
              >
                <Button onClick={handleclick}>
                  <ExitToAppIcon
                    style={{
                      color: "rgb(229 148 70)",
                      transform: "rotate(-90deg)",
                      fontSize: "50px",
                    }}
                  />
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
