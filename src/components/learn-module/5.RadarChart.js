import React from "react";
import { Radar, defaults } from "react-chartjs-2";
import * as ChartDataLabels from "chartjs-plugin-datalabels";

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = "bottom";

const RadarChart = () => {
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
            labels: ["Security", "Cost", "Usability"],
            datasets: [
              {
                label: "Passphrases",
                backgroundColor: "#FFF17624",
                borderColor: "black",
                borderWidth: 1,
                data: [7, 10, 7],
              },
              {
                label: "Password Managers",
                backgroundColor: "#8E24AA24",
                borderColor: "black",
                borderWidth: 1,
                data: [9, 3, 7],
              },
              {
                label: "2FA",
                backgroundColor: "#39ff1424",
                borderColor: "black",
                borderWidth: 1,
                data: [10, 8, 6],
              },
              {
                label: "Biometric Authentication",
                backgroundColor: "#00ffef24",
                borderColor: "black",
                borderWidth: 1,
                data: [7, 5, 10],
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            scale: {
              ticks: {
                display: false,
              },
            },
            plugins: {
              datalabels: {
                display: true,
                color: "rgba(255,230,0, 0.8)",
                align: "top",
                font: {
                  size: 10,
                },
              },
            },
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    display: false,
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
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default RadarChart;
