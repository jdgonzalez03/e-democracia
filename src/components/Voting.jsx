/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { VotingResults } from "./VotingResult";
import { VotingForm } from "./VotingForm";
import axios from "axios";
import { candidateUrl } from "../constants/urls";

export const Voting = ({ user }) => {
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
  }, []);

  const refresh = async () => {
    try {
      const response = await axios.get(candidateUrl);
      setCandidates(response.data);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    }
  };

  return (
    <div>
      <h2 className="yellow">Votaciones</h2>
      <VotingForm refresh={refresh} user={user} />
      <VotingResults results={candidates} />
    </div>
  );
};
