import React, { useState, useEffect, useContext } from "react";
import "src/scss/main.css";
import {
  Box,
  Typography,
  Grid,
  Button,
  Link,
  Paper,
  Checkbox,
  FormControl,
  TextField,
  IconButton,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Page from "src/component/Page";
import { calculateTimeLeft } from "src/utils";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { useHistory, Link as RouterComponent } from "react-router-dom";
import ButtonCircularProgress from "src/component/ButtonCircularProgress";
import { AuthContext } from "src/context/Auth";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .checkbox": {
      display: "flex",
      alignItems: "center",
    },
  },
  or: {
    width: "100%",
    borderTop: "1px solid #555555",
    marginTop: "20px",
    textAlign: "center",
    position: "relative",
    marginBottom: "20px",
    "& p": {
      position: "absolute",
      top: "-10px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "#242526",
      padding: "0 10px",
    },
  },
  twitterButton: {
    width: "100%",
    display: "flex !important",
    fontSize: "10px !important",
    alignItems: "center !important",
    justifyContent: "center !important",
    "& svg": {
      width: "100%",
      display: "flex !important",
      fontSize: "10px !important",
      alignItems: "center !important",
      justifyContent: "center !important",
    },
    "& rect": {
      width: "100%",
      display: "flex !important",
      fontSize: "10px !important",
      alignItems: "center !important",
      justifyContent: "center !important",
    },
  },

  btnFacebook: {
    marginRight: "5px",
    backgroundColor: "#fff",
    color: "#1877f2",
    width: "100%",
    height: "50px",
    borderRadius: "60px",
    letterSpacing: "1px",
    border: "1px solid #ffffff",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  donation: {
    "& span": {
      fontSize: "12px",
      padding: "2px 5px",
      // border: "1px solid #E59446",
      cursor: "pointer",
      "&.active": {
        backgroundColor: "#E59446",
        borderRadius: "7px",
      },
    },
  },
  loginBox: {
    padding: "40px 30px",
  },
  headingBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "40px 0px",
    flexDirection: "column",
    "& h2": {
      color: "rgb(186 184 189)",
    },
    "& h6": {
      color: "rgb(186 184 189)",
    },
    "& p": {
      color: "rgb(186 184 189)",
    },
  },
}));

function Login(props) {
  const classes = useStyles();
  const history = useHistory();
  const auth = useContext(AuthContext);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isloading, setLoader] = useState(false);
  const [errorMessage, setErrorMesage] = useState();
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [checkBoxRemember, setCheckedBox] = useState(false);
  const [timeLeft, setTimeLeft] = useState();
  const [verifyOTPOpen, setVerifyOTPOpen] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [endTime, setEndtime] = React.useState();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const _onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const temp = { ...formValue, [name]: value };
    setFormValue(temp);
  };

  useEffect(() => {
    if (verifyOTPOpen && endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    if (auth?.userLoggedIn) {
      history.push("/explore");
    }
  }, [auth?.userLoggedIn]);

  const isValidEmail = (value) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
    return re.test(String(value).toLowerCase());
  };
  const isValidNumber = (value) => {
    const re =
      /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([ -]?)\d{3}([ -]?)\d{4})$/;
    return re.test(value);
  };
  const validPassword = (value) => {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return re.test(value);
  };

  return (
    <form
    // onSubmit={(event) => handleFormSubmit(event)}
    >
      <Page title="Login In ">
        <Box className={classes.headingBox}>
          <Typography variant="h2">Sign In</Typography>
          <Typography variant="h6">
            Welcome back, you’ve been missed!
          </Typography>
          <Typography variant="body2">
            If you have already registerd ?
          </Typography>
        </Box>
        <Paper className={classes.loginBox} elevation={2}>
          <Box className="loginForm">
            <Grid container direction={"column"} spacing={2}>
              <Grid item xs={12} className={classes.donation}>
                <Box>
                  <span
                    style={{ fontSize: "14px", marginRight: "8px" }}
                    className={checked1 ? "active" : null}
                    onClick={() => {
                      setChecked1(true);
                      setChecked2(false);
                      setIsSubmit(false);
                    }}
                  >
                    Email
                  </span>
                  <span
                    style={{ fontSize: "14px", marginRight: "8px" }}
                    className={checked2 ? "active" : null}
                    onClick={() => {
                      setChecked2(true);
                      setChecked1(false);
                      setIsSubmit(false);
                    }}
                  >
                    Mobile number
                  </span>
                </Box>
              </Grid>
              {checked1 && (
                <Grid item>
                  <FormControl fullWidth>
                    <TextField

                      variant="outlined"
                      size="small"
                      name="email"
                      type="email"
                      placeholder="Enter your email "
                      fullWidth
                      onChange={_onInputChange}
                      error={Boolean(
                        (isSubmit && checked1 && formValue.email === "") ||
                        (formValue.email !== "" &&
                          checked1 &&
                          !isValidEmail(formValue.email))
                      )}
                      InputProps={{
                        startAdornment: (
                          <MailOutlineIcon position="start">Kg</MailOutlineIcon>
                        ),
                      }}
                    />
                    <FormHelperText error>
                      {(isSubmit && checked1 && formValue.email === "" && (
                        <Box ml={1}>Email is a required </Box>
                      )) ||
                        (formValue.email !== "" &&
                          checked1 &&
                          !isValidEmail(formValue.email) && (
                            <Box ml={1}>Enter a valid email address </Box>
                          ))}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              )}

              {checked2 && (
                <Grid item>
                  <FormControl fullWidth>
                    <PhoneInput
                      country={"in"}
                      // disabled={isEdit}
                      name="mobileNumber"
                      value={mobileNumber}
                      error={Boolean(
                        (isSubmit && checked2 && !mobileNumber) ||
                        (isSubmit && checked2 && !isValidNumber(mobileNumber))
                      )}
                      onChange={(phone, e) => {
                        setCountryCode(e.dialCode);
                        setMobileNumber(phone);
                      }}
                      inputStyle={{
                        borderRadius: "14px",
                        width: "100%",
                        height: "48px",
                        backgroundColor: "#0F212E",
                        border: "1px solid rgb(255 255 255 / 65%)",
                      }}
                    />
                    <FormHelperText error>
                      {(isSubmit &&
                        checked2 &&
                        mobileNumber === "" &&
                        "Mobile number is a required") ||
                        (mobileNumber !== "" &&
                          checked2 &&
                          !isValidNumber(mobileNumber) &&
                          "Enter a valid mobile number")}
                    </FormHelperText>
                  </FormControl>
                </Grid>
              )}
              <Grid item>
                <FormControl fullWidth>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    variant="outlined"
                    size="small"
                    name="password"
                    placeholder="Enter your password!"
                    onChange={_onInputChange}
                    error={Boolean(
                      (isSubmit && formValue.password === "") ||
                      (isSubmit && !validPassword(formValue.password))
                    )}
                    InputProps={{
                      startAdornment: <LockIcon position="start">Kg</LockIcon>,
                      endAdornment: (
                        <IconButton
                          position="end"
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword(!showPassword)}
                          // onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      ),
                    }}
                  />
                  <FormHelperText error>
                    {(isSubmit && formValue.password === "" && (
                      <Box ml={1}>Password is a required </Box>
                    )) ||
                      (isSubmit && !validPassword(formValue.password) && (
                        <Box ml={1}>
                          Password must be minimum 8 and maximum 16 characters , one special character, uppercase letter , lowercase letter.
                        </Box>
                      ))}
                  </FormHelperText>
                </FormControl>
                {errorMessage && (
                  <Box
                    ml={1}
                    mt={1}
                    style={{ color: "#ba1f11", fontWeight: 600 }}
                  >
                    {errorMessage}
                  </Box>
                )}
              </Grid>
              <Grid item>
                <Box className={classes.root}>
                  <Box className="checkbox">
                    <Checkbox
                      checked={checkBoxRemember}
                      onChange={(event) => setCheckedBox(!checkBoxRemember)}
                      // defaultChecked
                      size="small"
                      inputProps={{
                        "aria-label": "checkbox with small size",
                      }}
                    />
                    <Typography variant="body2">Remember me</Typography>
                  </Box>
                  <Typography variant="body2">
                    <Link component={RouterComponent} to="/forget-password">
                      Forgot Password?
                    </Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box className="d-flex justify-space-between">
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                    size="large"
                    onClick={() => history.push("/dashboard-01")}
                  >
                    Sign In {isLoading && <ButtonCircularProgress />}
                  </Button>
                </Box>
              </Grid>
              <Box textAlign="center">
                <Typography
                  // color="primary.main"
                  variant="body2"
                  style={{ marginTop: "20px" }}
                >
                  Don’t have any Account? &nbsp;
                  <Link component={RouterComponent} to="/signup">
                    Sign Up
                  </Link>
                </Typography>
              </Box>
            </Grid>
          </Box>
        </Paper>
      </Page>
    </form>
  );
}

export default Login;
