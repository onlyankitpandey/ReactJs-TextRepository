import React, { useState, useEffect } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Button,
  Grid,
  TextField,
  Link,
  Paper,
  IconButton,
  FormHelperText,
  CircularProgress,
} from "@material-ui/core";

import Page from "src/component/Page";
import PersonIcon from "@material-ui/icons/Person";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockIcon from "@material-ui/icons/Lock";
import "react-datepicker/dist/react-datepicker.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { useHistory, Link as RouterComponent } from "react-router-dom";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { KeyboardDatePicker } from "@material-ui/pickers";
import moment from "moment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { FaTransgender } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { calculateTimeLeft, tokenName } from "src/utils";
import { SiVerizon } from "react-icons/si";

const useStyles = makeStyles((theme) => ({
  radio: {
    border: "1px solid #FFFFFF",
    borderRadius: "15px",
    height: "45px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-evenly",
    [theme.breakpoints.down("xs")]: {
      height: "35px",
    },
    "&:hover": {
      borderColor: "#fff",
    },
    "& .innerRadio": {
      display: "flex",
      alignItems: "center",
    },
  },
  loginBox: {
    padding: "40px 30px",
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
  iconSvg: {
    "& svg": {
      fontSize: "30px",
    },
  },
  btnFacebook: {
    marginRight: "5px",
    backgroundColor: "#fff",
    color: "#1877f2",
    width: "100%",
    letterSpacing: "1px",
    height: "50px",
    borderRadius: "60px",
    border: "1px solid #ffffff",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
}));

function Signup() {
  const classes = useStyles();
  const history = useHistory();
  const [checked, setChecked] = React.useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isloading, setloaders] = useState(false);
  const [errorMessageSignin, setErrorMesagesignin] = useState();
  const [errorMessageresend, setErrorMesageResend] = useState();
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [countryCode, setCountryCode] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isLoadingresend, setIsLoadingResend] = useState(false);
  const [loader, setloader] = useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isLoadingOtp, setIsLoadingOtp] = React.useState(false);

  const [minuteTimer, setMinuteTimer] = useState();
  const [emailOtp, setEmail] = React.useState();
  const [otpPop, setOtpPop] = React.useState(false);
  const [termsPopUp, setTermsPopUp] = React.useState(false);
  const [verifyOTPOpen, setVerifyOTPOpen] = useState(false);
  const [fieldValue, setFieldValueDateOfBirth] = useState("");
  const [timeLeft, setTimeLeft] = useState();
  const [formValue, setFormValue] = useState({
    email: "",
    userName: "",
    referralCode: "",
    password: "",
    gender: "",
    dob: new Date(),
  });

  console.log("emailOtp", emailOtp, formValue);
  const _onInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const temp = { ...formValue, [name]: value };
    setFormValue(temp);
  };

  const formInitialSchema = {
    email: emailOtp,
    otp: "",
  };
  const [endTime, setEndtime] = React.useState();
  console.log("timeLeft", timeLeft, endTime, verifyOTPOpen);

  useEffect(() => {
    if (verifyOTPOpen && endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
  const validUsername = (value) => {
    const re = /^\S*$/;
    return re.test(value);
  };
  const validPassword = (value) => {
    const re =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    return re.test(value);
  };


  const myAge = (date) => {
    const age = moment().diff(moment(date), "years") >= 18;
    return age;
  };
  const [errorMessageSignup, setErrorMesageSignup] = useState();
  const [errorMessageerror, setErrorMesageerror] = useState();

  return (
    <form
    // onSubmit={(event) => gethandleSubmitApi(event)}
    >
      <Page title='SignUp'>
        <Box textAlign='center' mt={5} mb={5}>
          <Typography variant='h2' style={{ color: "rgb(186 184 189)" }}>
            Getting Started
          </Typography>
          <Typography variant='h6' style={{ color: "rgb(186 184 189)" }}>
            Create an account to continue and connect with the people
          </Typography>
        </Box>
        <Box mb={5}>
          <Paper
            className={classes.loginBox}
            elevation={2}
            style={{ padding: "25px" }}
          >
            <Grid className='height100'>
              <Box className='loginForm'>
                <form noValidate>
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
                            setFormValue({
                              email: "",
                              userName: formValue.userName
                                ? formValue.userName
                                : "",
                              referralCode: "",
                              password: formValue.password
                                ? formValue.password
                                : "",
                              gender: formValue.gender ? formValue.gender : "",
                              dob: fieldValue ? fieldValue : new Date(),
                            });
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
                            type='text'
                            variant='outlined'
                            size='small'
                            name='email'
                            placeholder='Enter your email '
                            fullWidth
                            onChange={_onInputChange}
                            error={Boolean(
                              (isSubmit &&
                                checked1 &&
                                formValue.email === "") ||
                              (formValue.email !== "" &&
                                checked1 &&
                                !isValidEmail(formValue.email))
                            )}
                            InputProps={{
                              startAdornment: (
                                <MailOutlineIcon position='start'>
                                  Kg
                                </MailOutlineIcon>
                              ),
                            }}
                          />
                          <FormHelperText error>
                            {(isSubmit &&
                              checked1 &&
                              formValue.email === "" && (
                                <Box ml={1}>Email is a required </Box>
                              )) ||
                              (formValue.email !== "" &&
                                checked1 &&
                                !isValidEmail(formValue.email) && (
                                  <Box ml={1}>Enter a valid email address</Box>
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
                            name='mobileNumber'
                            value={mobileNumber}
                            error={Boolean(
                              (isSubmit && checked2 && !mobileNumber) ||
                              (isSubmit &&
                                checked2 &&
                                !isValidNumber(mobileNumber))
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
                          type='text'
                          placeholder='Your username'
                          variant='outlined'
                          autoComplete='off'
                          // autoComplete="off"
                          size='small'
                          name='userName'
                          fullWidth
                          onChange={_onInputChange}
                          error={
                            (isSubmit && formValue.userName === "") ||
                            (formValue.userName !== "" &&
                              !validUsername(formValue.userName)) ||
                            (formValue.userName !== "" &&
                              formValue.userName.length > 40)
                          }
                          InputProps={{
                            startAdornment: (
                              <PersonIcon position='start'>Kg</PersonIcon>
                            ),
                            endAdornment: (
                              <Box>
                                {validUsername(formValue.userName) && (
                                  <>
                                    {errorMessageerror && (
                                      <Box
                                        textAlign='left'
                                        ml={1}
                                        mt={1}
                                        mr={1}
                                        style={{
                                          display: "flex",
                                          color: "green",
                                          fontWeight: 600,
                                        }}
                                      >
                                        <Typography>
                                          <SiVerizon />
                                        </Typography>
                                        <Typography>
                                          {errorMessageerror}
                                        </Typography>
                                      </Box>
                                    )}
                                    {errorMessageSignup && (
                                      <Box
                                        textAlign='left'
                                        ml={1}
                                        mt={1}
                                        style={{
                                          color: "#ba1f11",
                                          fontWeight: 600,
                                        }}
                                      >
                                        {errorMessageSignup}
                                      </Box>
                                    )}
                                  </>
                                )}
                              </Box>
                            ),
                          }}
                        />
                        <FormHelperText error>
                          {(isSubmit && formValue.userName === "" && (
                            <Box ml={1}>Name is a required </Box>
                          )) ||
                            (formValue.userName !== "" &&
                              !validUsername(formValue.userName) && (
                                <Box ml={1}>Space not allowed in name </Box>
                              )) ||
                            (formValue.userName !== "" &&
                              formValue.userName.length > 40 && (
                                <Box ml={1}>
                                  User name should be less than or equal to 40
                                  characters.
                                </Box>
                              ))}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <FormControl fullWidth>
                        <TextField
                          type={showPassword ? "text" : "password"}
                          variant='outlined'
                          size='small'
                          name='password'
                          placeholder='Password!'
                          onChange={_onInputChange}
                          error={Boolean(
                            (isSubmit && formValue.password === "") ||
                            (formValue.password !== "" &&
                              !validPassword(formValue.password))
                          )}
                          InputProps={{
                            autoComplete: "new-password",
                            form: {
                              autocomplete: "off",
                            },
                            startAdornment: (
                              <LockIcon position='start'>Kg</LockIcon>
                            ),
                            endAdornment: (
                              <IconButton
                                position='end'
                                aria-label='toggle password visibility'
                                onClick={() => setShowPassword(!showPassword)}
                                edge='end'
                              >
                                {showPassword ? (
                                  <Visibility />
                                ) : (
                                  <VisibilityOff />
                                )}
                              </IconButton>
                            ),
                          }}
                        />
                        <FormHelperText error>
                          {(isSubmit && formValue.password === "" && (
                            <Box ml={1}>Password is a required </Box>
                          )) ||
                            (formValue.password !== "" &&
                              !validPassword(formValue.password) && (
                                <Box ml={1}>
                                  Password must be minimum 8 and maximum 16 characters , one special character, uppercase letter , lowercase letter.
                                </Box>
                              ))}
                        </FormHelperText>
                      </FormControl>
                    </Grid>
                    <Grid item>
                      <Grid container spacing={2}>
                        <Grid item lg={6} sm={6} md={6} xs={12}>
                          <FormControl fullWidth>
                            <KeyboardDatePicker
                              // value={fieldValue}
                              placeholder='DD/MM/YYYY'
                              onChange={(date) => {
                                setFieldValueDateOfBirth(new Date(date));
                              }}
                              maxDate={moment().subtract(18, "year")}
                              format='DD/MM/YYYY'
                              inputVariant='outlined'
                              disableFuture
                              margin='dense'
                              helperText=''
                              name='dob'
                              value={fieldValue}
                              // onChange={_onInputChange}
                              error={Boolean(isSubmit && !myAge(fieldValue))}
                            // helperText={touched.dob && errors.dob}
                            />
                            <FormHelperText error>
                              {isSubmit && !myAge(fieldValue) && (
                                <Box ml={1}>
                                  You must be 18 years old or above
                                </Box>
                              )}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                        <Grid item lg={6} sm={6} md={6} xs={12}>
                          <FormControl component='fieldset' fullWidth>
                            <Box className={classes.radio}>
                              <RadioGroup
                                aria-label='gender'
                                name='gender'
                                // value={value}
                                onChange={_onInputChange}
                                error={Boolean(
                                  isSubmit && formValue.gender === ""
                                )}
                              >
                                <FormControlLabel
                                  value='male'
                                  control={<Radio />}
                                  label='Male'
                                  labelPlacement='end'
                                />
                                <FormControlLabel
                                  value='female'
                                  control={<Radio />}
                                  labelPlacement='end'
                                  label='Female'
                                  style={{ fontSize: ".5rem" }}
                                />
                              </RadioGroup>
                            </Box>
                            <FormHelperText error>
                              {isSubmit && formValue.gender === "" && (
                                <Box ml={1}>Gender is required </Box>
                              )}
                            </FormHelperText>
                          </FormControl>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body1">By clicking Sign Up, you agree to our <Link target="_blank" href="/terms-conditions">
                        Terms
                      </Link> and <Link target="_blank" href="/privacy-policy">Privacy Policy</Link>. </Typography>
                    </Grid>
                    <Grid item>
                      {errorMessageSignin && (
                        <Box
                          textAlign='left'
                          ml={1}
                          mt={1}
                          style={{ color: "#ba1f11", fontWeight: 600 }}
                        >
                          {errorMessageSignin}
                        </Box>
                      )}
                      <Box mt={2} mb={3}>
                        <Button
                          variant='contained'
                          color='primary'
                          fullWidth
                          type='submit'
                          size='large'
                        >
                          Sign Up
                          {isLoading && <CircularProgress />}
                        </Button>
                      </Box>
                    </Grid>
                    <Grid item>
                      <Box textAlign='center'>
                        <Typography color='primary.main' variant='body2'>
                          If you have already registerd ? &nbsp;
                          <Link component={RouterComponent} to='/login'>
                            Sign In
                          </Link>
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </form>
              </Box>
            </Grid>
          </Paper>
        </Box>
      </Page>
    </form>
  );
}

export default Signup;
