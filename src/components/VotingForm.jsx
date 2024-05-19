/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Candidate from "./Candidate";
import axios from "axios";
import { candidateUrl, voteUrl } from "../constants/urls";

export const VotingForm = ({ refresh, user }) => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [hasVoted, setHasVoted] = useState(user.hasVoted);

  useEffect(() => {
    // Obtener candidatos desde la URL
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedCandidate && !hasVoted) {
      try {
        await axios.post(voteUrl, {
          candidateName: selectedCandidate,
          userId: user._id,
        });
        refresh();
        setHasVoted(true);
      } catch (error) {
        console.error("Error voting:", error);
      }
    }
  };

  const buttonStyle = {
    cursor: hasVoted ? "not-allowed" : "pointer",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Vote for your favorite candidate</h2>
      {hasVoted ? (
        <p>You have already voted.</p>
      ) : (
        candidates.map((candidate) => (
          <Candidate
            key={candidate._id}
            candidate={candidate}
            onSelect={setSelectedCandidate}
          />
        ))
      )}
      <button type="submit" style={buttonStyle} disabled={hasVoted}>
        Submit Vote
      </button>
    </form>
  );
};
