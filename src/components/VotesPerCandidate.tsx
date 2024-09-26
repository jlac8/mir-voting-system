import { useCandidates } from "./Context";

function VotesPerCandidate() {
  const { candidates } = useCandidates();
  return (
    <section>
      <h2>Resultados</h2>
      {candidates.map((candidate) => {
        return (
          <p>
            {candidate.name}: {candidate.votes}
          </p>
        );
      })}
    </section>
  );
}

export default VotesPerCandidate;
