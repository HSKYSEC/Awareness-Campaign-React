import React from "react";
import { Line, defaults } from "react-chartjs-2";
import * as ChartDataLabels from "chartjs-plugin-datalabels";

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const LineChart_StrongPassword = () => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "-25%" }}
      >
        <Line
          plugins={[ChartDataLabels]}
          data={{
            labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
            datasets: [
              {
                data: [0, 0, 1, 1, 1, 3, 12, 12, 19, 5, 6],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                ],
                borderWidth: 1,
              },
              // {
              //   label: 'Quantity',
              //   data: [47, 52, 67, 58, 9, 50],
              //   backgroundColor: 'orange',
              //   borderColor: 'red',
              // },
            ],
          }}
          height={400}
          width={600}
          options={{
            plugins: {
              datalabels: {
                display: true,
                align: "end",
                color: "rgba(255,230,0, 0.5)",
                font: {
                  size: 18,
                },
              },
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 0,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default LineChart_StrongPassword;
