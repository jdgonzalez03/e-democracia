/* eslint-disable react/prop-types */
import "./VotingResults.css";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./VotingResult.css";
import { candidateUrl } from "../constants/urls";
import { useState, useEffect } from "react";
import axios from "axios";

export const VotingResults = () => {
  // Extraemos los nombres y los votos de los candidatos
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await axios.get(candidateUrl);
        setCandidates(response.data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [candidates]);

  const candidateNames = candidates.map((candidate) => candidate.name);
  const votes = candidates.map((candidate) => candidate.votes);

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
