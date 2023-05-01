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
  Featuring: {},
  centering: {
    display: "flex",
    justifyContent: "center",
  },
  textBox: {
    position: "relative",

    "& h2": {
      color: theme.palette.primary.main
    },
    "& h3": {
      color: theme.palette.primary.main
    },
    "& .mainheadingBox": {
      marginTop: "6px",
      "& p": {
        textAlign: "center",
        maxWidth: "350px",
        // color:'rgba(255, 255, 255, 0.5)',
         color: theme.palette.secondary.main
      },
    },
  },
  bannerBox: {
    position: "relative",
    padding: "0px 0 60px",
    background: theme.palette.background.section,
  },
}));
export default function Earn() {
  const classes = useStyles();

  return (
    <Box className="mainboxEarn">
      <Box className={classes.bannerBox}>
        <Container>
          <img
            src="images/letimg.png"
            alt="Top Left Arrow"
            className="shape1 moveTop"
          />
          <img
            src="images/rightimg.png"
            alt="Top Right Arrow"
            className="shape3 moveLeft"
          />

          <Grid container spacing={3}>
            <Grid item lg={12} sm={12} xs={12} align="center">
              <Box mt={5} mb={5} className={classes.textBox}>
                <Typography variant="h2" style={{ fontWeight: "600", maxWidth: "406px" }} >
                  Experiencing the{" "}
                  <span style={{ color: "#811793" }}>leading</span>{" "}
                  cryptocurrency tradig bot
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={4} sm={6} xs={12} className={classes.centering}>
              <Box className={classes.textBox} align="center">
                <img
                  src="images/leading.png"
                  style={{ width: "100%", maxWidth: "200px" }}
                  className="moveTop"
                />
                <Box className="mainheadingBox">
                  <Typography variant="h3">Trust</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna diam nunc, potenti placerat nunc, placerat dignissim.
                    Sed interdum morbi varius facilisis nisl est.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4} sm={6} xs={12} className={classes.centering}>
              <Box className={classes.textBox} align="center">
                <img
                  src="images/leading_2.png"
                  style={{ width: "100%", maxWidth: "200px" }}
                  className="moveTop"
                />
                <Box className="mainheadingBox">
                  <Typography variant="h3">Security</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna diam nunc, potenti placerat nunc, placerat dignissim.
                    Sed interdum morbi varius facilisis nisl est.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={4} sm={6} xs={12} className={classes.centering}>
              <Box className={classes.textBox} align="center">
                <img
                  src="images/leading_1.png"
                  style={{ width: "100%", maxWidth: "200px" }}
                  className="moveLeft"
                />
                <Box className="mainheadingBox">
                  <Typography variant="h3">Privacy</Typography>
                  <Typography variant="body1">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna diam nunc, potenti placerat nunc, placerat dignissim.
                    Sed interdum morbi varius facilisis nisl est.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
