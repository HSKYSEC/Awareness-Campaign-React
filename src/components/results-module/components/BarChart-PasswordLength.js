import React from "react";
import { Bar, defaults } from "react-chartjs-2";
import * as ChartDataLabels from "chartjs-plugin-datalabels";

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const BarChart_PasswordLength = () => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "-25%" }}
      >
        <Bar
          plugins={[ChartDataLabels]}
          data={{
            labels: ["5 - 7", "8 - 10", "11 - 13", "14 - 16", "16"],
            datasets: [
              {
                data: [2, 25, 18, 8, 7],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
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
                align: "top",
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

export default BarChart_PasswordLength;
