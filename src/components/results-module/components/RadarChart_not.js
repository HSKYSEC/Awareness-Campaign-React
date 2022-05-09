import React from "react";
import { Radar, defaults } from "react-chartjs-2";
import * as ChartDataLabels from "chartjs-plugin-datalabels";

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const RadarChart_not = () => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "-25%" }}
      >
        <Radar
          plugins={[ChartDataLabels]}
          data={{
            labels: [
              "Complexity",
              "Lack of Familiarity",
              "Time Consuming",
              "Implementation Cost",
            ],
            datasets: [
              {
                label: "# of votes",
                data: [5, 11, 0, 2],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
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
            scale: {
              ticks: {
                display: false,
                maxTicksLimit: 10,
              },
            },
            plugins: {
              datalabels: {
                display: true,
                color: "rgba(255,230,0, 0.5)",
                align: "top",

                font: {
                  size: 15,
                },
              },
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    display: false,
                    beginAtZero: true,
                  },
                },
              ],
              xAxes: [
                {
                  ticks: {
                    display: false,
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

export default RadarChart_not;
