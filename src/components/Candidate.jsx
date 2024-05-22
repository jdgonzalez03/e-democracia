/* eslint-disable react/prop-types */
import "./Candidate.css";
const Candidate = ({ candidate, onSelect }) => {
  return (
    <div className="candidate">
      <label htmlFor={candidate.name}>
        <div className="candidate-image">
          <img src={candidate.urlImage} alt={`${candidate.name}`} />
        </div>
        <div className="candidate-info">
          <h3 className="candidate-nombre">{candidate.name}</h3>
          <p className={`partido ${candidate.color}`}>
            Partido: {candidate.party}
          </p>
          <p>Edad: {candidate.age}</p>
        </div>
        <p className="candidate-slogan">Lema: {candidate.slogan}</p>
      </label>

      <input
        type="radio"
        id={candidate.name}
        name="vote"
        value={candidate.name}
        onChange={() => onSelect(candidate.name)}
      />
    </div>
  );
};

export default Candidate;
