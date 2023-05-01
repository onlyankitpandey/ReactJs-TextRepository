import React, { useState, useEffect, useContext } from "react";
import {
  Box,
  makeStyles,
  Typography,
  Grid,
  Container,
  Table,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  TableBody,
  TableContainer,
} from "@material-ui/core";
import Page from "src/component/Page";
import DeleteIcon from '@material-ui/icons/Delete';
import DashboardCard from "src/component/DashboardCard";
import axios from "axios";
import moment from "moment";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  bannerBox: {
    width: "100%",
    "& .MuiTableCell-root": {
      height: "40px",
      padding: "0 10px",
    },

    "& .MuiTableCell-body": {
      height: "56px",
      padding: "0 10px",
    },
    padding: "50px 0px",
    textAlign: "center",
    [theme.breakpoints.only("xs")]: {
      padding: "10px 0px",
    },
    "& h2": {
      fontFamily: "'Mulish', sans-serif",
      fontSize: "33px",
      fontWeight: "600",
    },
    "& > *": {
      marginTop: theme.spacing(2),
    },
    "& .accountBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
    },
    "& .moreBox1": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      "& p": {
        color: theme.palette.primary.main,
      },
      "& svg": {
        fontSize: "25px",
        marginLeft: "8px",
        color: theme.palette.primary.main,
      },
    },
    "& .moreBox": {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      cursor: "pointer",
      "& p": {
        color: theme.palette.primary.main,
      },
      "& svg": {
        fontSize: "25px",
        marginLeft: "8px",
        color: theme.palette.primary.main,
      },
    },
    "& .left": {
      "& h2": {
        color: theme.palette.primary.main,
      },
    },
  },
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.background.dark,
    },
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.table,
    },
  },
  PriceCheckerBox: {
    "& .headingBox": {
      "& h2": {
        color: theme.palette.primary.main,
      },
    },
  },
}));

function Features() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [adminData, setAdminData] = useState([]);
  const [IsLoading, setIsLoading] = useState(false);

  const dashboardHandler = async () => {
    try {
      setIsLoading(true);
      const res = await axios({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/1/comments",
      });
      console.log("res-----", res);
      if (res.status === 200) {
        setIsLoading(false);
        setAdminData(res.data);
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    dashboardHandler()
  }, []);

  const handleDelete = (id) => {
    const filteredData = adminData.filter((data) => {
      return data?.id !== id
    });
    setAdminData(filteredData);
  }


  return (
    <>
      <Page title="Dashboard">
        <Container maxWidth="lg">
          <Box className={classes.bannerBox}>
            <Box align="left" className="left">
              <Typography variant="h2">Overview for {location.pathname.replace("/", "")}</Typography>
            </Box>
            <Box mt={3} mb={3}>
              <Grid container spacing={3}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className="walletSet"
                >
                  <DashboardCard
                    data={"Lorem Text Data"}
                    values="50"
                    status={""}
                    type="card"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className="walletSet"
                >
                  <DashboardCard
                    data={"Lorem Text Data"}
                    values="50"
                    status={""}
                    type="card"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className="walletSet"
                >
                  <DashboardCard
                    data={"Lorem Text Data"}
                    values="25"
                    status={""}
                    type="card"
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={6}
                  lg={3}
                  className="walletSet"
                >
                  <DashboardCard
                    data={"Lorem Text Data"}
                    values="30"
                    status={""}
                    type="card"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box mt={6} className={classes.PriceCheckerBox}>
              <Box align="left" mt={3} mb={2} className="headingBox">
                <Typography variant="h2">Table Data History for {location.pathname.replace("/", "")}</Typography>
              </Box>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow style={{ backgroundColor: "#E59446" }}>
                      <TableCell>Sr. Number</TableCell>
                      <TableCell>ID</TableCell>
                      <TableCell>Name</TableCell>
                      <TableCell>Email</TableCell>
                      <TableCell>Description</TableCell>
                      <TableCell>Time</TableCell>
                      <TableCell>Action</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {adminData &&
                      adminData?.map((data, index) => {
                        return (
                          <TableRow className={classes.root}>
                            <TableCell component="th" scope="row">
                              {index + 1}
                            </TableCell>
                            <TableCell>
                              {`${data?.id}0000`}
                            </TableCell>
                            <TableCell style={{ textTransform: "capitalize" }}>
                              {data?.name}
                            </TableCell>
                            <TableCell style={{ textTransform: "capitalize" }}>
                              {data?.email}
                            </TableCell>
                            <TableCell>{data?.body}</TableCell>
                            <TableCell>
                              {moment(data?.createdAt).format("lll")}
                            </TableCell>
                            <TableCell>
                              <IconButton onClick={() => handleDelete(data?.id)}>
                                <DeleteIcon />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    {!IsLoading && adminData.length == 0 && (
                      <Box align="center" className="moreBox1">
                        <Typography variant="body2">
                          No Record Founds
                        </Typography>
                      </Box>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Container>
      </Page>
    </>
  );
}

export default Features;
