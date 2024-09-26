import "./App.css";
import Candidates from "./components/Candidates";
import { CandidatesProvider } from "./components/Context";
import Filter from "./components/Filter";
import TotalVotes from "./components/TotalVotes";
import VotesPerCandidate from "./components/VotesPerCandidate";

function App() {
  return (
    <main>
      <CandidatesProvider>
        <Candidates />
        <section className="results">
          <Filter />
          <section className="votes">
            <TotalVotes />
            <VotesPerCandidate />
          </section>
        </section>
      </CandidatesProvider>
    </main>
  );
}

export default App;
