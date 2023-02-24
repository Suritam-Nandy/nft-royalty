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
import { Chart, Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,

  Tooltip,
  Filler
);
const AreaChart = () => {
  const [chartData, setChartData] = useState({});

  const ChartInit = async () => {
    let xValues = [];
    let confirmed = [];
    let yValues = [];
    const config = {
      headers: {
        "X-API-KEY": "FxKTp6MHpWQDaos8SRnSetdIZiUYLliS",
      },
    };
    let s = 0;
    await axios
      .get(
        "https://api.transpose.io/nft/sales-by-contract-address?chain_id=ethereum&contract_address=0x1bB6edF7b129967d512086FbDf489ED659580916&sold_after=2023-02-01T00:00:00Z&limit=10000",
        config
      )
      .then((res) => {
        res.data.results.map((ele) => {
          if (
            xValues[xValues.length - 1] !== new Date(ele.timestamp).getDate()
          ) {
            s = ele.quantity;
            xValues.push(new Date(ele.timestamp).getDate());
            yValues.push(s);
          } else {
            s = s + ele.quantity;
            yValues[yValues.length - 1] = s;
          }

          confirmed.push(ele.confirmed);
          return { xValues, yValues };
        });

        setChartData({
          labels: xValues,
          datasets: [
            {
              data: yValues,
              fill: true,

              hoverBorderColor: "rgb(53, 162, 235)",
              backgroundColor: "rgba(31, 120, 180, 0.8)",
              hoverBackgroundColor: "rgba(138, 120, 180, 0.8)",
            },
          ],
        });
      })

      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    ChartInit();
  }, []);
  return (
    <div>
      {chartData.labels && (
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
