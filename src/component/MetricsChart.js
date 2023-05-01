import React, { useEffect, useState } from "react";
import { Box, makeStyles, Paper } from "@material-ui/core";
import Chart from "react-apexcharts";
import ButtonCircularProgress from "./ButtonCircularProgress";

const useStyles = makeStyles((theme) => ({}));

export default function MetricsChart({ graphData, profit }) {
  const classes = useStyles();
  const [priceLists, setPriceList] = useState([]);
  const [months, setMonths] = useState([]);
  const [loader, setLoader] = useState(true);

  // console.log(graphData, "profit==========>>>>>>>>>>>>>>>>>", profit);
  // const PriceData =
  //   graphData.graphData && graphData.graphData.filter((month) => month.month);
  // console.log("PriceData======", PriceData);
  const graphArr = async () => {
    if (graphData) {
      // let PriceList = [];
      const list = graphData;
      if (list.length > 0) {
        // const add =
        const addMonths = await Promise.all(
          list.map(async (listData) => {
            // console.log(listData.month);
            // const monthss = `${listData.month} (${listData.year.slice(2)})`;
            // console.log(monthss);
            return listData.month;
          })
        );
        setMonths(addMonths);
        // console.log("add--------->", addMonths);
        const addPrice = await Promise.all(
          list.map(async (listData) => {
            // console.log(listData.month);
            return listData.totalPrice;
          })
        );
        const totalFalseTransaction = await Promise.all(
          list.map(async (listData) => {
            // console.log(listData.month);
            return listData.totalFalseTransaction;
          })
        );
        // console.log("add--------->", addPrice);
        if (profit) {
          setPriceList(addPrice);
        } else {
          setPriceList(totalFalseTransaction);
        }
        setLoader(false);
      }
    }
  };

  useEffect(() => {
    graphArr();
  }, [graphData, profit]);

  const options = {
    series: [
      {
        name: "Desktops",
        data: priceLists,
      },
    ],
    options: {
      chart: {
        height: 300,
        type: "line",
        zoom: {
          enabled: false,
        },
        categories: {
          color: "#fff",
          fontSize: "15px !important",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "PROFIT PERCENTAGE",
        align: "center",
        color: "#fafafa",
      },
      fill: {
        colors: ["#F44336", "#E91E63", "#9C27B0"],
      },
      grid: {
        row: {
          colors: ["#D5D7DB", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: months,
      },
      noData: {
        text: "Loading...",
      },
    },
  };

  // console.log("options.options,", options.options);
  // console.log("options.series,", options.series);
  return (
    <Box className={classes.mainBox}>
      <Paper style={{ paddingTop: "16px" }}>
        {loader && options?.options?.length == 0 ? (
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "cnter",
              width: "100%",
            }}
          >
            <ButtonCircularProgress />
          </Box>
        ) : (
          <Chart
            options={options.options}
            series={options.series}
            type="line"
            height={300}
          />
        )}
      </Paper>
    </Box>
  );
}
