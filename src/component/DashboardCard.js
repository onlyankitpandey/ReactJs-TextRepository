import React from "react";
import { makeStyles, Box, Typography, Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  mainbox: {
    backgroundColor: theme.palette.background.dark,
    border: "1px solid rgb(255 255 255 / 26%)",
    borderRadius: "8px",
    padding: "30px",
    position: "relative",
    transition: "0.5s",
    "&:hover": {
      transform: "translateY(-10px)",
      border: "1px solid rgb(129, 23, 147)",
    },
    "& .imgbox": {
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      "& img": {
        margin: "0 auto",
      },
    },
    "& .content": {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",

      "& h2": {
        color: "rgba(255, 255, 255, 0.5)",
        fontSize: "33px",
        textAlign: "center",
        fontWeight: "400",
        fontFamily: "'Mulish', sans-serif",
      },
      "& p": {
        marginBottom: "10px",
        fontFamily: "'Mulish', sans-serif",
        fontWeight: "500",
        fontSize: "17px",
      },
    },
  },
}));

function FeatureCard(props) {
  const classes = useStyles();
  const { data, values, status } = props;

  return (
    <>
      <Paper className={classes.mainbox}>
        <Box className="content">
          <Typography variant="body2" style={{ marginBottom: "10px" }}>
            {data}
          </Typography>
          <Typography variant="h2"> {values} </Typography>
        </Box>
      </Paper>
    </>
  );
}

export default FeatureCard;
