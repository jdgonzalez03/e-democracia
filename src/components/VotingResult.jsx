/* eslint-disable react/prop-types */
import "./VotingResults.css";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./VotingResult.css";

export const VotingResults = ({ results }) => {
  // Extraemos los nombres y los votos de los candidatos
  const candidateNames = results.map((candidate) => candidate.name);
  const votes = results.map((candidate) => candidate.votes);

  // Datos para el diagrama de barras
  const barChartData = {
    labels: candidateNames,
    datasets: [
      {
        label: "Votos",
        data: votes,
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

  // Datos para el diagrama de pastel
  const pieChartData = {
    labels: candidateNames,
    datasets: [
      {
        label: "Votos",
        data: votes,
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
    <div className="voting-results-container">
      <h2>
        Resultados de la <span className="red">Votación</span>{" "}
      </h2>
      <div className="chart-container">
        <h3>Gráfico de Barras</h3>
        <Bar data={barChartData} />
      </div>
      <div className="chart-container">
        <h3>Gráfico de Pastel</h3>
        <Pie data={pieChartData} />
      </div>
    </div>
  );
};
