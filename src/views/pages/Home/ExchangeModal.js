import React, { useState, useEffect } from "react";
import {
  Grid,
  Box,
  Typography,
  makeStyles,
  InputAdornment,
  TextField,
  IconButton,
} from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BsSearch } from "react-icons/bs";
import { BiChevronLeft } from "react-icons/bi";

const useStyles = makeStyles((theme) => ({
  icons: {
    position: "absolute",
    left: "0px",
    top: "12px",
    color: theme.palette.primary.main,
  },
  imagebox: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    backgroundColor: theme.palette.background.default,
    borderRadius: "8px",
    justifyContent: "center",
    padding: "10px",
    "& p": {
      marginLeft: "8px",
      color: theme.palette.primary.main,
    },
  },
  imagebox1: {
    // cursor: "pointer",
    display: "flex",
    alignItems: "center",
    // backgroundColor: theme.palette.background.disabled,
    backgroundColor: "#0000003d",
    borderRadius: "8px",
    justifyContent: "center",
    padding: "10px",
    "& p": {
      marginLeft: "8px",
      // color: theme.palette.primary.main,
      color: "#ffffff69",
    },
  },
  selectHover: {
    border: "1px solid #0f212e",
    cursor: "pointer",
    "&:hover": {
      border: "1px solid #fafafa",
    },
  },
  selected: {
    border: "1px solid #0f212e",
    "& p": { color: "#fafafa66" },
    // cursor: "pointer",
    "&:hover": {
      border: "1px solid #0f212e",
    },
  },
  heading: {
    marginLeft: "25px",
  },
  dialogbox: {
    position: "relative",
    padding: "20px",
    maxHeight: "95%",
    [theme.breakpoints.down("sm")]: {
      overflowY: "auto",
    },
  },
}));

const ExchangeModal = ({
  handleClose,
  detailscard,
  setTokenSelect,
  SelectedTokens,
  tokensToDisabled,
}) => {
  const classes = useStyles();
  const [tokenText, setTokenText] = useState("");
  const [filterListData, setFilterListData] = useState(detailscard);

  useEffect(() => {
    if (tokenText != "") {
      FilterCoinLists();
    } else setFilterListData(detailscard);
  }, [tokenText]);

  const filterCoin = (e) => {
    let coinName = String(e.target.value).toLowerCase();
    this.filteredCoinList = this.coinList.filter((element) => {
      let cName = String(element.coinShortName).toLowerCase();
      return cName.includes(coinName);
    });
  };
  const FilterCoinLists = () => {
    let coinName = String(tokenText).toLowerCase();
    const filtersListss = detailscard.filter((element) => {
      let cName = String(element.heading).toLowerCase();
      return cName.includes(coinName);
    });
    // const filtersToken =  filtersListss.filter((element)=>{
    //   element.heading != tokensToDisabled?.heading
    // })
    setFilterListData(filtersListss);
    // console.log("filtersListss ----->>>> ", filtersListss);
  };
  // console.log(
  //   "===============>>>>>>>>>>>>>>>tokensToDisabled<<<<<<<<<<<<<<<===============",
  //   tokensToDisabled
  // );
  return (
    <Box className={classes.dialogbox}>
      <IconButton className={classes.icons} onClick={handleClose}>
        <BiChevronLeft />
      </IconButton>
      <DialogTitle>
        <Typography variant="h6" align="center">
          Select a token
        </Typography>
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          <Box>
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                name="firstName"
                size="small"
                fullWidth="true"
                placeholder="Search by name"
                className={classes.textfield}
                onChange={(e) => setTokenText(e.target.value)}
                value={tokenText}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IconButton style={{ fontSize: "17px" }}>
                        <BsSearch />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </Box>
          <Box mt={2}>
            <Grid container spacing={1}>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  // className={classes.imagebox}
                  className={
                    tokensToDisabled?.heading != "ETH"
                      ? classes.imagebox
                      : classes.imagebox1
                  }
                  onClick={() => {
                    if (tokensToDisabled?.heading != "ETH") {
                      handleClose();
                      setTokenSelect(
                        filterListData.filter(
                          (data) => data.heading == "ETH"
                        )[0]
                      );
                    }
                  }}
                >
                  <img src="./images/image1.png" />
                  <Typography variant="body1">ETH</Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  className={
                    tokensToDisabled?.heading != "USDT"
                      ? classes.imagebox
                      : classes.imagebox1
                  }
                  onClick={() => {
                    if (tokensToDisabled?.heading != "USDT") {
                      handleClose();
                      setTokenSelect(
                        filterListData.filter(
                          (data) => data.heading == "USDT"
                        )[0]
                      );
                    }
                  }}
                >
                  <img src="./images/image1.png" />
                  <Typography variant="body1">USDT</Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  className={
                    tokensToDisabled?.heading != "USDC"
                      ? classes.imagebox
                      : classes.imagebox1
                  }
                  onClick={() => {
                    if (tokensToDisabled?.heading != "USDC") {
                      handleClose();
                      setTokenSelect(
                        filterListData.filter(
                          (data) => data.heading == "USDC"
                        )[0]
                      );
                    }
                  }}
                >
                  <img src="./images/image1.png" />
                  <Typography variant="body1">USDC</Typography>
                </Box>
              </Grid>
              <Grid item lg={3} md={3} sm={3} xs={6}>
                <Box
                  className={
                    tokensToDisabled?.heading != "DAI"
                      ? classes.imagebox
                      : classes.imagebox1
                  }
                  onClick={() => {
                    if (tokensToDisabled?.heading != "DAI") {
                      handleClose();
                      setTokenSelect(
                        filterListData.filter(
                          (data) => data.heading == "DAI"
                        )[0]
                      );
                    }
                  }}
                >
                  <img src="./images/image1.png" />
                  <Typography variant="body1">DAI</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Box mt={2}>
            <Grid container spacing={1}>
              {filterListData &&
                filterListData.map((data, i) => {
                  if (tokensToDisabled?.heading == data?.heading) {
                    return;
                  }
                  return (
                    <Grid
                      item
                      lg={12}
                      md={12}
                      sm={12}
                      xs={12}
                      // style={{ border: "1px solid #fff" }}
                      // className={classes.selectHover}
                      className={
                        SelectedTokens?.heading == data?.heading
                          ? classes.selected
                          : tokensToDisabled?.heading == "ETH" &&
                            data.heading == "WETH"
                          ? classes.selected
                          : classes.selectHover
                      }
                      onClick={() => {
                        if (
                          SelectedTokens?.heading != data.heading
                          // ||
                          // (tokensToDisabled?.heading == "ETH" &&
                          //   data.heading == "WETH")
                        ) {
                          if (
                            tokensToDisabled?.heading == "ETH" &&
                            data.heading == "WETH"
                          ) {
                          } else {
                            handleClose();
                            setTokenSelect(data);
                          }
                        }
                      }}
                    >
                      <Grid container>
                        <Grid item lg={6} md={6} sm={6} xs={6}>
                          <Box display="flex" alignItems="center">
                            <img
                              src={data.image}
                              style={{ width: "20px" }}
                              alt="token"
                            />

                            <Box className={classes.heading}>
                              <Typography variant="body2">
                                {" "}
                                {data.heading}
                              </Typography>
                              <Typography variant="body1">
                                {data.discription}
                              </Typography>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item lg={6} md={6} sm={6} xs={6} align="right">
                          <Typography
                            variant="body1"
                            style={{ paddingTop: "10px" }}
                          >
                            {data.number}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </DialogContentText>
      </DialogContent>
    </Box>
  );
};

export default ExchangeModal;
