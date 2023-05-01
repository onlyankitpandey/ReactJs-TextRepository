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
    "& .mainheadingBox": {
      marginTop: "6px",
    },
    "& h2": {
      color: theme.palette.primary.main
    },
    "& p": {
     
      maxWidth: "350px",
      color: theme.palette.primary.main
    },
  },
  bannerBox: {
    position: "relative",
    padding: "60px 0 60px",
    "& h2": {
      maxWidth: "500px",
      textAlign: "left",
    },
    "& p": {
      maxWidth: "500px",
    },
  },
}));

export default function Comming() {
  const classes = useStyles();

  return (
    <Box className="mainboxEarn">
      <Box className={classes.bannerBox}>
        <Container>
          <Grid container spacing={3} style={{ alignItems: "center" }}>
            <Grid item lg={6} sm={6} xs={12} className={classes.centering}>
              <Box mt={5} mb={5} className={classes.textBox}>
                <Typography variant="h2" style={{ fontWeight: "600" }} >
                  Works with these{" "}
                  <span style={{ color: "#E59446" }}>tools</span> and more
                  coming!{" "}
                </Typography>
                <Box mt={2}>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna diam nunc, potenti placerat nunc, placerat dignissim.
                    Sed interdum morbi varius facilisis nisl est. Sed interdum
                    morbi varius facilisis nisl est.
                  </Typography>

                  <Typography variant="body2" mt={1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Urna diam nunc, potenti placerat nunc, placerat dignissim.
                    Sed interdum morbi varius facilisis nisl est.Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Urna diam nunc,
                    potenti placerat nunc, placerat dignissim. Sed interdum
                    morbi varius facilisis nisl est.
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item lg={6} sm={6} xs={12} className={classes.centering}>
              <Box className={classes.textBox} align="center">
                <img
                  src="images/comming.png"
                  style={{ width: "100%", maxWidth: "500px" }}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
