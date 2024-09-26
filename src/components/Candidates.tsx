import Candidate from "./Candidate";
import { useCandidates } from "./Context";

function Candidates() {
  const { candidates, handleVote } = useCandidates();

  return (
    <section className="candidates">
      {candidates.map((candidate) => (
        <Candidate
          key={candidate.id}
          candidate={candidate}
          onHandleVote={() => handleVote(candidate.id)}
        />
      ))}
    </section>
  );
}

export default Candidates;
