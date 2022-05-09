import React from "react";
import { Chart } from "chart.js";
import { Doughnut, defaults } from "react-chartjs-2";
import * as ChartDataLabels from "chartjs-plugin-datalabels";
//Chart.register(ChartDataLabels);

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const Doughnut_Reuse = () => {
  return (
    <div>
      <div
        id="game"
        class="flex-center flex-column"
        style={{ marginBottom: "-25%" }}
      >
        <Doughnut
          plugins={[ChartDataLabels]}
          data={{
            labels: ["Always", "Often", "Never"],
            datasets: [
              {
                label: "# of votes",
                data: [15, 31, 15],
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
            hoverOffset: 4,
          }}
          height={400}
          width={600}
          options={{
            plugins: {
              datalabels: {
                display: true,
                font: {
                  size: 18,
                },
              },
            },
            tooltips: {
              mode: "index",
              intersect: false,
            },
            interaction: {
              mode: "point",
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
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Doughnut_Reuse;
