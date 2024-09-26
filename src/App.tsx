import "./App.css";
import Candidates from "./components/Candidates";
import { CandidatesProvider } from "./components/Context";
import TotalVotes from "./components/TotalVotes";
import VotesPerCandidate from "./components/VotesPerCandidate";

function App() {
  return (
    <main>
      <CandidatesProvider>
        <Candidates />
        <section className="votes">
          <TotalVotes />
          <VotesPerCandidate />
        </section>
      </CandidatesProvider>

      <section className="results">
        <aside className="filters">
          <h2>Ver</h2>
          <label htmlFor="percentage">
            <input
              type="radio"
              value="PERCENTAGE"
              id="percentage"
              name="type"
            />
            <span>%</span>
          </label>
          <label htmlFor="total">
            <input type="radio" value="TOTAL" id="total" name="type" />
            <span>Total</span>
          </label>
          <form>
            <label htmlFor="selectAll">Todos:</label>
            <input type="checkbox" id="selectAll" name="selectAll" />
            <br />

            <label htmlFor="candidate1">Candidato 1:</label>
            <input
              type="checkbox"
              id="candidate1"
              name="candidate"
              value="candidate1"
            />
            <br />

            <label htmlFor="candidate2">Candidato 2:</label>
            <input
              type="checkbox"
              id="candidate2"
              name="candidate"
              value="candidate2"
            />
            <br />

            <label htmlFor="candidate3">Candidato 3:</label>
            <input
              type="checkbox"
              id="candidate3"
              name="candidate"
              value="candidate3"
            />
            <br />

            <label htmlFor="candidate4">Candidato 4:</label>
            <input
              type="checkbox"
              id="candidate4"
              name="candidate"
              value="candidate4"
            />
            <br />
          </form>
        </aside>
      </section>
    </main>
  );
}

export default App;
