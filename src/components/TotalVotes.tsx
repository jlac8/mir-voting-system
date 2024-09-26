import { useCandidates } from "./Context";

function TotalVotes() {
  const { totalVotes } = useCandidates();

  return (
    <section>
      <h2>
        Total de Votos: <span>{totalVotes}</span>
      </h2>
    </section>
  );
}

export default TotalVotes;
