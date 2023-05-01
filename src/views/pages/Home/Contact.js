import React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  box: {
    display: "flex",
    paddingTop: "30px",
  },

  textBox: {
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.only("xs")]: {
      display: "block",
      justifyContent: "center",
    },
    "& .mainheadingBox": {
      marginTop: "6px",
    },
    "& p": {
      textAlign: "center",
      maxWidth: "350px",
    },
  },
  bannerBox: {
    position: "relative",
    padding: "0px 0 60px",
    "& h2": {
      maxWidth: "1000px",
      textAlign: "left",
    },
    "& .nextBox": {
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
    },
  },
  textBox: {
    "& h2": {
      color: theme.palette.primary.main
    },
    "& p": {
      color: theme.palette.primary.main
    }
  },
}));

export default function Comming() {
  const classes = useStyles();

  return (
    <Box className="mainboxEarn">
      <Box className={classes.bannerBox}>
        <Container>
          <Grid container spacing={3} style={{ alignItems: "center" }}>
            <Grid item lg={8} sm={6} xs={12}>
              <Box mt={5} mb={5} className={classes.textBox}>
                <Typography variant="h2" style={{ fontWeight: "700" }}>
                  Start trading with Lorem for free!
                </Typography>
                <Box mt={2} className={classes.textBox}>
                  <Typography variant="body2" style={{ fontSize: "22px", fontWeight: "400" }}>
                    Free to use - no credit card required
                  </Typography>
                </Box>
                <Box mt={5} className="nextBox">
                  <img src="images/next.png" alt="image" />
                  <Typography
                    variant="body2"
                    mt={1}
                    style={{ marginLeft: "12px", fontWaight: "400" }}
                  >
                    Let’s get started
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4} sm={6} xs={12} className={classes.centering}>
              <Box className={classes.textBox} align="center">
                <img
                  src="images/contact_1.png"
                  alt="image"
                  style={{
                    width: "100%",
                    maxWidth: "120px",
                  }}
                />
                <img
                  src="images/contact.png"
                  alt="image"
                  className="moveTop"
                  style={{
                    marginLeft: "55px",
                    width: "100%",
                    maxWidth: "113px",
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
