import Candidate from "./Candidate";

const candidates = ["juan", "heberth", "victor", "jaqueline"];

function Candidates() {
  return (
    <section>
      {candidates.map((candidate: string, index: number) => {
        return <Candidate key={index} candidateName={candidate} />;
      })}
    </section>
  );
}

export default Candidates;
