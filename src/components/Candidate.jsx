/* eslint-disable react/prop-types */
import "./Candidate.css";
const Candidate = ({ candidate, onSelect }) => {
  return (
    <div className="candidate">
      <input
        type="radio"
        id={candidate.name}
        name="vote"
        value={candidate.name}
        onChange={() => onSelect(candidate.name)}
      />
      <label htmlFor={candidate.name}>
        <img src={candidate.image} alt={`${candidate.name}`} />
        <h3>{candidate.name}</h3>
        <p>Party: {candidate.party}</p>
        <p>Age: {candidate.age}</p>
        <p>Slogan: {candidate.slogan}</p>
      </label>
    </div>
  );
};

export default Candidate;
