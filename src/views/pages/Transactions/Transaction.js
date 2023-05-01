import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  Typography,
  Container,
  makeStyles,
  Button,
  Grid,
  Menu,
  MenuItem,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { CategoryButtons, exploreData, RankingButtons } from "src/constants";
import Page from "src/component/Page";
import { Link, useHistory, useLocation } from "react-router-dom";
import Scroll from "react-scroll";
import axios from "axios";
import Pagination from "@material-ui/lab/Pagination";
import moment from "moment";
const useStyles = makeStyles((theme) => ({
  mainBox: {
    margin: "50px 0px",
    "& .MuiTableCell-root": {
      height: "40px",
      padding: "0 10px",
    },

    "& .MuiTableCell-body": {
      height: "56px",
      padding: "0 10px",
    },
  },
  width: {
    margin: "24px",
    paddingLeft: "9px",
  },
  buttonright: {
    marginTop: "25px",
    padding: "22px",
  },
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.background.paper,
    },
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.table,
    },
  },
  dialogbox: {
    position: "relative",
  },
  icon: {
    color: "white",
    position: "absolute",
    top: "5px",
    right: "10px",
    "&:hover": {
      cursor: "Pointer",
    },
  },
  action: {
    display: "flex",
    justifyContent: "center",
  },
  tableBaseContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#190a2c",
    borderRadius: "0px 0px 5px 5px",
  },
  filterBtn: {
    border: "2px solid #213743",
    margin: "4px 0px",
    fontSize: "14px",
    // background: "#213743",
    height: "44px",
    color: "#ffffff",
    backgroundColor: theme.palette.background.paper,
    boxShadow: "0px 4px 4px rgb(0 0 0 / 25%)",
    boxSizing: "border-box",
    fontWeight: "500",
    lineHeight: "20px",
    borderRadius: "5px",
    "&:hover": {
      // color: theme.palette.primary.main
      color: "#fff",
    },
  },
  headerCellcontent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "inherit",
    "& div": {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      "& svg": {
        // position:"absolute",
        // top:"10px"
      },
    },
  },
  textBox: {
    "& h2": {
      color: theme.palette.primary.main,
    },
  },
  datepicker: {
    color: theme.palette.primary.main,
  },
}));

function Transaction(props) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const [recentCol, setRecentCol] = React.useState(null);
  const [selectedCategoryNames, setSelectedCategoryNames] = useState();
  const [swapExchange, setswapExchange] = useState();
  const [timeFilter, setTimeFilter] = useState();
  const [toTimeFilter, setToTimeFilter] = useState();
  const [executionsList, setexecutionsList] = useState();
  const [page, setPage] = useState(1);
  const [executionsList1, setexecutionsList1] = useState([]);

  useEffect(() => {
    let searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
      let param = searchParams.get("id");
      const getdiv = document.getElementById(param);
      const ofsetTop = getdiv.offsetTop - 30;
      console.log(ofsetTop);
      var scroll = Scroll.animateScroll;
      scroll.scrollTo(ofsetTop, param);
    }
  }, [location.pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // const buyTokenHandler = async () => {
  //   console.log("<<<<<<<<<<<<<-------------->>>>>>>>>>>>>>>>>>");
  //   try {
  //     const res = await axios({
  //       method: "POST",
  //       url: ApiConfig.buyTokenList,
  //       headers: {
  //         token:
  //           sessionStorage.getItem("token") ||
  //           localStorage.getItem("creatturAccessToken"),
  //       },
  //       data: {
  //         search: selectedCategoryNames && selectedCategoryNames.name,
  //         fromDate: timeFilter,
  //         toDate: toTimeFilter,
  //         swap: swapExchange,
  //         page: page.toString(),
  //         limit: "10",
  //       },
  //     });
  //     if (res.data.responseCode == 200) {
  //       setexecutionsList(res.data.result);
  //       setexecutionsList1(res.data.result.docs);
  //       // console.log("total-----results:----", res.data.result.docs);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  return (
    <Page title="Transaction">
      <Box className={classes.mainBox}>
        <Container maxWidth="lg">
          <Box my={3}>
            <Grid container spacing={1}>
              <Grid item xs={6} align="left">
                <Box className={classes.textBox}>
                  <Typography variant="h2">Transactions History</Typography>{" "}
                </Box>
              </Grid>
              <Grid item xs={6} align="right">
                <Button variant="contained" color="primary">
                  Export
                </Button>
              </Grid>
            </Grid>
            <Box my={3}>
              <Grid container spacing={2}>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Typography variant="boay2" className={classes.datepicker}>
                    From Date:
                  </Typography>
                  <Box mt={1}>
                    <KeyboardDatePicker
                      value={timeFilter}
                      onChange={(date) => {
                        setTimeFilter(new Date(date));
                      }}
                      format="DD/MM/YYYY"
                      inputVariant="outlined"
                      disableFuture={true}
                      margin="dense"
                      variant="outlined"
                      helperText=""
                      name="dob"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Typography variant="boay2" className={classes.datepicker}>
                    To Date:
                  </Typography>
                  <Box mt={1}>
                    <KeyboardDatePicker
                      variant="outlined"
                      value={toTimeFilter}
                      onChange={(date) => {
                        setToTimeFilter(new Date(date));
                      }}
                      minDate={timeFilter}
                      format="DD/MM/YYYY"
                      inputVariant="outlined"
                      disableFuture={true}
                      margin="dense"
                      helperText=""
                      name="dob"
                      fullWidth
                    />
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Box style={{ marginTop: "29px" }}>
                    {/* COLLECTION */}
                    <Button
                      fullWidth
                      className={classes.filterBtn}
                      onClick={(event) => setRecentCol(event.currentTarget)}
                    >
                      {swapExchange ? swapExchange : "Select Exchange"}
                      <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={recentCol}
                      keepMounted
                      className={classes.MenuSelector}
                      open={Boolean(recentCol)}
                      onClose={() => setRecentCol(null)}
                    >
                      <MenuItem
                        onClick={() => {
                          setRecentCol(null);
                          setswapExchange();
                        }}
                        style={{ color: "#fff" }}
                      >
                        Select Exchange
                      </MenuItem>
                      {/* {RankingButtons?.map((data, i) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setRecentCol(null);
                              setswapExchange(data);
                            }}
                            style={{ color: "#fff" }}
                            key={i}
                          >
                            {data.name}
                          </MenuItem>
                        );
                      })} */}
                      <MenuItem
                        onClick={() => {
                          setRecentCol(null);
                          setswapExchange("Uniswap");
                        }}
                        style={{ color: "#fff" }}
                      // key={i}
                      >
                        Uniswap
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setRecentCol(null);
                          setswapExchange("Shibaswap");
                        }}
                        style={{ color: "#fff" }}
                      // key={i}
                      >
                        Shibaswap
                      </MenuItem>
                      <MenuItem
                        onClick={() => {
                          setRecentCol(null);
                          setswapExchange("Sushiswap");
                        }}
                        style={{ color: "#fff" }}
                      // key={i}
                      >
                        Sushiswap
                      </MenuItem>
                    </Menu>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Box style={{ marginTop: "29px" }}>
                    <Button
                      fullWidth
                      className={classes.filterBtn}
                      onClick={(event) => setAnchorEl1(event.currentTarget)}
                    >
                      {selectedCategoryNames
                        ? selectedCategoryNames.name.toString()
                        : "Select Coin"}
                      <ArrowDropDownIcon />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl1}
                      keepMounted
                      className={classes.MenuSelector}
                      open={Boolean(anchorEl1)}
                      onClose={() => setAnchorEl1(null)}
                    >
                      <MenuItem
                        onClick={() => {
                          setAnchorEl1(null);
                          setSelectedCategoryNames();
                        }}
                        style={{ color: "#fff" }}
                      >
                        Select Coin
                      </MenuItem>
                      {CategoryButtons.map((data, i) => {
                        return (
                          <MenuItem
                            onClick={() => {
                              setAnchorEl1(null);
                              setSelectedCategoryNames(data);
                            }}
                            style={{ color: "#fff" }}
                            key={i}
                          >
                            {data.name}
                          </MenuItem>
                        );
                      })}
                    </Menu>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Box mt={4}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      onClick={buyTokenHandler}
                    >
                      Search
                    </Button>
                  </Box>
                </Grid>
                <Grid item xs={6} sm={4} md={3} lg={2}>
                  <Box mt={4}>
                    <Button fullWidth variant="contained" color="primary">
                      Reset
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#811793" }}>
                  <TableCell align="left">
                    <Typography
                      variant="body2"
                      className={classes.headerCellcontent}
                    >
                      Tx Hash&nbsp;&nbsp;&nbsp;&nbsp;
                      <Box>
                        <ArrowDropUpIcon
                          style={{ position: "absolute", top: "-17px" }}
                        />
                        <ArrowDropDownIcon
                          style={{ position: "absolute", bottom: "-17px" }}
                        />
                      </Box>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body2"
                      className={classes.headerCellcontent}
                    >
                      Coin Name&nbsp;&nbsp;&nbsp;&nbsp;
                      <Box>
                        <ArrowDropUpIcon
                          style={{ position: "absolute", top: "-17px" }}
                        />
                        <ArrowDropDownIcon
                          style={{ position: "absolute", bottom: "-17px" }}
                        />
                      </Box>
                    </Typography>
                  </TableCell>
                  <TableCell>Exchange A</TableCell>
                  <TableCell>Exchange B</TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body2"
                      className={classes.headerCellcontent}
                    >
                      Date/Time&nbsp;&nbsp;&nbsp;&nbsp;
                      <Box>
                        <ArrowDropUpIcon
                          style={{ position: "absolute", top: "-17px" }}
                        />
                        <ArrowDropDownIcon
                          style={{ position: "absolute", bottom: "-17px" }}
                        />
                      </Box>
                    </Typography>{" "}
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body2"
                      className={classes.headerCellcontent}
                    >
                      Price Difference&nbsp;&nbsp;&nbsp;&nbsp;
                      <Box>
                        <ArrowDropUpIcon
                          style={{ position: "absolute", top: "-17px" }}
                        />
                        <ArrowDropDownIcon
                          style={{ position: "absolute", bottom: "-17px" }}
                        />
                      </Box>
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography
                      variant="body2"
                      className={classes.headerCellcontent}
                    >
                      Profit&nbsp;&nbsp;&nbsp;&nbsp;
                      <Box>
                        <ArrowDropUpIcon
                          style={{ position: "absolute", top: "-17px" }}
                        />
                        <ArrowDropDownIcon
                          style={{ position: "absolute", bottom: "-17px" }}
                        />
                      </Box>
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {executionsList1 &&
                  executionsList1?.map((data, index) => {
                    return (
                      <TableRow className={classes.root}>
                        <TableCell component="th" scope="row">
                          {/* {data?.transactionHash == 0
                            ? 0
                            : sortAddress(data?.transactionHash)} */}
                        </TableCell>
                        <TableCell>
                          {`${data?.fromToken} - ${data?.toToken}`}
                        </TableCell>
                        <TableCell>{data?.fromSwap}</TableCell>
                        <TableCell>{data?.toSwap}</TableCell>
                        <TableCell>
                          {moment(data?.createdAt).format("lll")}
                        </TableCell>
                        <TableCell>{/* {data?.PriceDifference} */}0</TableCell>
                        <TableCell> {data?.price}</TableCell>
                      </TableRow>
                    );
                  })}

                {executionsList1.length == 0 && (
                  <Box align="center" className="moreBox1">
                    <Typography variant="body2">No Execution Founds</Typography>
                  </Box>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {executionsList?.pages > 1 && (
            <Box align="right" mt={3} className={classes.page}>
              <Pagination
                count={executionsList?.pages}
                siblingCount={0}
                showFirstButton
                showLastButton
                page={page}
                onChange={(e, v) => setPage(v)}
              />
              {/* <Button
              className={classes.filterBtn}
              onClick={(event) => setRecentCol(event.currentTarget)}
            >
              {swapExchange ? swapExchange.name.toString() : "10"}
              <ArrowDropDownIcon />
            </Button> */}
            </Box>
          )}
        </Container>
      </Box>
    </Page>
  );
}

export default Transaction;
