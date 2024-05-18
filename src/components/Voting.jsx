import { useState } from "react";
import { VotingResults } from "./VotingResult";
import { VotingForm } from "./VotingForm";

export const Voting = () => {
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
      <VotingForm onVote={handleVote} />
      <VotingResults results={votes} />
    </div>
  );
};
