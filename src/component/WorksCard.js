import React from "react";
import {
  Container,
  Box,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  MainBox: {
    cursor: "pointer",
    padding: "10px",
    background:theme.palette.background.subpaper,
    filter: "drop-shadow(0px 64px 100px rgba(0, 0, 0, 0.25))",
    borderRadius: "24px",
    padding: '15px',
    // "&:hover": {
    //   boxShadow:
    //     "0 0 1rem #E59446, 0 0 0rem #E59446, 0 0 1rem #E59446, 0 0 4rem #E59446",
    // },
  },

  top: {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  textbox: {
    "& h3": {
      color: theme.palette.primary.main
    },
    "& p": {
      color: theme.palette.secondary.main
    }
  }
}));
export default function Trading({ data }) {
  const classes = useStyles();

  return (
    <Box className={classes.MainBox}>
      <Grid container style={{ alignItems: "center" }}>
        <Grid item lg={1} sm={1} md={1} xs={2}>
          <img src={data.image} alt="" style={{ width: "40px" }} />
        </Grid>
        <Grid item lg={11} sm={11} md={11} xs={10}>
          <Box className={classes.textbox}>
            <Typography
              variant="h3"
              style={{ fontSize: "21px", lineHeight: "35px", marginLeft: "25px" }}
            >
              {data.name}
            </Typography>
            <Typography variant="body1" style={{ marginLeft: "25px" }}>
              {data.description}
            </Typography>
          </Box>

        </Grid>
      </Grid>
    </Box>
  );
}
