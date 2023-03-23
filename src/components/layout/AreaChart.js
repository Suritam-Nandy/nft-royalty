import axios from "axios";
import Loading from "../layout/Loading.js";

import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler,
} from "chart.js";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

import { Chart, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Filler
);

const AreaChart = (selected) => {
  // console.log("contract_address", selected);
  const { uid } = useSelector((state) => state.firebase.auth);

  const collections = useSelector(
    (state) => state.firestore.ordered.collections
  );
  useFirestoreConnect({
    collection: `allCollections/${uid}/collections`,
    storeAs: "collections",
  });

  const [count, setCount] = useState(0);

  const [chartData, setChartData] = useState({});
  const [dataList, setDataList] = useState([]);
  let pas = {
    chain_id: "ethereum",
    contract_address: "0x1bB6edF7b129967d512086FbDf489ED659580916",
    sold_after: "2023-03-01T00:00:00Z",
    sold_before: "2023-03-31T00:00:00Z",

    limit: "10000",
  };
  // console.log(collections);

  const ChartInit = async () => {
    try {
      if (count < 6) {
        // console.log(selected);
        setCount(count + 1);
        const xAxis = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
        ];
        // await collections.map((element) => {

        let xValues = [];
        let confirmed = [];
        let yValues = [];
        const config = {
          headers: {
            "X-API-KEY": "FxKTp6MHpWQDaos8SRnSetdIZiUYLliS",
          },
          params: pas,
        };

        let s = 0;
        let i = 0;
        config.params.contract_address = selected.nftContract_address
          ? selected.nftContract_address
          : collections[0].nftContractAddress;
        config.params.sold_after = selected.range.startDate
          ? `${selected.range.startDate}T00:00:00Z`
          : "2023-03-01T00:00:00Z";
        config.params.sold_before = selected.range.endDate
          ? `${selected.range.endDate}T00:00:00Z`
          : "2023-03-01T00:00:00Z";
        // console.log(config.params.sold_before);

        axios
          .get(
            "https://api.transpose.io/nft/sales-by-contract-address?",
            config
          )
          .then((res) => {
            // console.log("transpose request chart successfull");
            // i = 1;
            res.data.results.map((ele) => {
              if (
                xValues[xValues.length - 1] !==
                new Date(ele.timestamp).getDate()
              ) {
                s = ele.quantity;
                xValues.push(new Date(ele.timestamp).getDate());

                while (i < xValues[xValues.length - 1]) {
                  while (xAxis[i] < xValues[xValues.length - 1]) {
                    yValues.splice(i, 0, 0);
                    i = i + 1;
                  }
                  i = i + 1;
                }
                yValues.push(s);
              } else {
                s = s + ele.quantity;
                yValues[yValues.length - 1] = s;
              }
              confirmed.push(ele.confirmed);
              return { xValues, yValues };
            });
            setDataList([
              dataList,
              {
                data: yValues,
                fill: true,

                backgroundColor:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
              },
            ]);
            setChartData({
              labels: xAxis,
              datasets: [
                {
                  data: yValues,
                  fill: true,

                  backgroundColor:
                    "#" + Math.floor(Math.random() * 16777215).toString(16),
                },
              ],
            });
            // console.log(chartData.dataList);
          })

          .catch((err) => {
            console.log(err);
          });
        // });
      } else {
        console.log("transpose updated sales");
      }
    } catch (error) {
      console.log("Error getting document:", error);
    }
  };

  useEffect(() => {
    if (!collections && !chartData.datasets) {
      return <Loading />;
    } else {
      // setCount(0);
      ChartInit();
    }
  }, [
    selected.nftContract_address,
    selected.range.startDate,
    selected.range.endDate,
  ]);
  if (!chartData.datasets) {
    return <Loading />;
  } else {
  }
  return (
    <div>
      {chartData.datasets && (
        <Line
          data={chartData}
          options={{
            scales: {
              x: {
                grid: {
                  display: false,
                },
              },
              y: {
                grid: {
                  display: false,
                },
              },
            },
            elements: {},
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      )}
    </div>
  );
};
export default AreaChart;
