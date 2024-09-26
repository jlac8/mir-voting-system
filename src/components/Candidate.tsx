import { CandidateType } from "../interfaces/CandidateType";

interface CandidateProp {
  candidate: CandidateType;
  onHandleVote: () => void;
}

const Candidate = ({ candidate, onHandleVote }: CandidateProp) => {
  return (
    <div className="candidate">
      <button type="button" onClick={onHandleVote}>
        {candidate.name}
      </button>
    </div>
  );
};

export default Candidate;
