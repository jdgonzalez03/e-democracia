/* eslint-disable react/prop-types */
import { useState } from "react";
import { VotingResults } from "./VotingResult";
import { VotingForm } from "./VotingForm";

export const Voting = ({ user }) => {
  const [votes, setVotes] = useState({
    "Candidate 1": 0,
    "Candidate 2": 0,
    "Candidate 3": 0,
  });

  const handleVote = (candidate) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [candidate]: prevVotes[candidate] + 1,
    }));
  };

  return (
    <div>
      <h2>Voting</h2>
      <VotingForm onVote={handleVote} user={user} />
      <VotingResults results={votes} />
    </div>
  );
};
