import { useCandidates } from "./Context";

function VotesPerCandidate() {
  const { candidates, isPercentage, totalVotes } = useCandidates();

  return (
    <section>
      <h2>Resultados</h2>
      {candidates.map((candidate) => {
        return (
          <p key={candidate.name}>
            {candidate.name}:{" "}
            {isPercentage
              ? totalVotes > 0
                ? ((candidate.votes / totalVotes) * 100).toFixed(0) + "%"
                : "0%"
              : candidate.votes}
          </p>
        );
      })}
    </section>
  );
}

export default VotesPerCandidate;
