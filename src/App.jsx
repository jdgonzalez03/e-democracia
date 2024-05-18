// src/App.js
import { useState } from "react";
import Header from "./components/Header";
import VotingForm from "./components/VotingForm";
import VotingResults from "./components/VotingResult";

const App = () => {
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
    <div className="App">
      <Header />
      <VotingForm onVote={handleVote} />
      <VotingResults results={votes} />
    </div>
  );
};

export default App;
