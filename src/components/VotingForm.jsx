/* eslint-disable react/prop-types */

import { useState } from "react";
import Candidate from "./Candidate";
import candidatesData from "../candidates.json";

export const VotingForm = ({ onVote }) => {
  const [selectedCandidate, setSelectedCandidate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedCandidate) {
      onVote(selectedCandidate);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Vote for your favorite candidate</h2>
      {candidatesData.map((candidate) => (
        <Candidate
          key={candidate.name}
          candidate={candidate}
          onSelect={setSelectedCandidate}
        />
      ))}
      <button type="submit">Submit Vote</button>
    </form>
  );
};
