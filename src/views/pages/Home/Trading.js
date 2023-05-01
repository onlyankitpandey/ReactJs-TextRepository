import React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import WorksCard from "src/component/WorksCard";
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
      textAlign: "center",
      maxWidth: "350px",
    },
  },
  bannerBox: {
    position: "relative",
    padding: "0px 0 60px",
  },
  head: {
    fontWeight: "400",
    fontSize: "19px",
    paddingTop: "10px",
    color: theme.palette.primary.main
  },

}));
const GameMap1 = [
  {
    image: "images/features_1.png",
    name: "Feature-1",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim.",
  },
  {
    image: "images/features_2.png",
    name: "Feature-2",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim.",
  },
  {
    image: "images/features_3.png",
    name: "Feature-3",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim.",
  },
  {
    image: "images/features.png",
    name: "Feature-4",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna diam nunc, potenti placerat nunc, placerat dignissim.",
  },
];
export default function Earn() {
  const classes = useStyles();

  return (
    <Box className="mainboxEarn">
      <Box className={classes.bannerBox}>
        <Container>
          <Grid container spacing={3} style={{ alignItems: "center" }}>
            <Grid item lg={12} sm={12} xs={12} align="center">
              <Box mt={5} mb={5} className={classes.textBox}>
                <Typography variant="h2" style={{ fontWeight: "600" }}>
                  Automate your{" "}
                  <span style={{ color: "#811793" }}>Trading</span>{" "}
                </Typography>
                <Box mt={1}>
                  <Typography
                    variant="body2"
                    className={classes.head}

                  >
                    Take your emotion out of the equation
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} sm={6} xs={12} className={classes.centering}>
              <Grid container spacing={2}>
                {GameMap1.map((data, i) => {
                  return (
                    <Grid item lg={12} sm={12} xs={12}>
                      <Box key={i}>
                        <WorksCard data={data} type="timing" index={i} />
                      </Box>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid item lg={7} sm={6} xs={12} className={classes.centering}>
              <Box className={classes.textBox} align="center">
                <img src="images/tratding.png" style={{ width: "100%" }} />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
