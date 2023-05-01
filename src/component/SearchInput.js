import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Grid,
  Typography,
  FormControl,
  TextField,
  Paper,
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    padding: "15px",
  },
}));

const SearchInput = ({ value, onChangeText }) => {
  const classes = useStyles();
  React.useEffect(() => {
    let input = document.querySelector('input');
    input.addEventListener('input', onChangeText);
    return input.removeEventListener('input', onChangeText);

  }, []);
  return (
    <Paper className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <FormControl fullWidth>
            <TextField
              variant="outlined"
              name="firstName"
              size="small"
              fullWidth="true"
              type="text"
              value={value}
              onChange={onChangeText}
              placeholder="Search beer by name"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};
export default SearchInput;

