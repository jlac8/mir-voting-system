import { useCandidates } from "./Context";

function VotesPerCandidate() {
  const { candidates, isPercentage, totalVotes, selectedCandidates } =
    useCandidates();

  const filteredCandidates = candidates.filter((candidate) =>
    selectedCandidates.includes(candidate.name)
  );

  return (
    <section>
      <h2>Resultados</h2>
      {filteredCandidates.length === 0 ? (
        <p>Seleccione algún candidato</p>
      ) : (
        filteredCandidates.map((candidate) => {
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
        })
      )}
    </section>
  );
}

export default VotesPerCandidate;
