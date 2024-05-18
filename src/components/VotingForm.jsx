/* eslint-disable react/prop-types */

import { useState, useEffect } from "react";
import Candidate from "./Candidate";
import candidatesData from "../constants/candidates.json";

export const VotingForm = ({ onVote, user }) => {
  const [selectedCandidate, setSelectedCandidate] = useState("");
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const userVote = localStorage.getItem(`vote_${user}`);
    if (userVote) {
      setHasVoted(true);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCandidate && !hasVoted) {
      onVote(selectedCandidate);
      localStorage.setItem(`vote_${user}`, selectedCandidate);
      setHasVoted(true);
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
        candidatesData.map((candidate) => (
          <Candidate
            key={candidate.name}
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
