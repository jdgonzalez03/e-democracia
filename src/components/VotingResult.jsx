/* eslint-disable react/prop-types */
import "./VotingResults.css";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

export const VotingResults = ({ results }) => {
  const data = {
    labels: Object.keys(results),
    datasets: [
      {
        label: "Votes",
        data: Object.values(results),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Voting Results</h2>
      <div>
        <h3>Bar Chart</h3>
        <Bar data={data} />
      </div>
      <div>
        <h3>Pie Chart</h3>
        <Pie data={data} />
      </div>
    </div>
  );
};
