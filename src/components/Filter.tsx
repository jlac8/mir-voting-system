import { useCandidates } from "./Context";

function Filter() {
  const {
    isPercentage,
    handleFilter,
    candidates,
    selectedCandidates,
    handleCandidateSelection,
    selectAllCandidates,
  } = useCandidates();

  return (
    <aside className="filters">
      <h2>Ver</h2>
      <label htmlFor="percentage">
        <input
          type="radio"
          value="PERCENTAGE"
          id="percentage"
          name="type"
          onChange={handleFilter}
          checked={isPercentage === true}
        />
        <span>%</span>
      </label>
      <label htmlFor="total">
        <input
          type="radio"
          value="TOTAL"
          id="total"
          name="type"
          onChange={handleFilter}
          checked={isPercentage === false}
        />
        <span>Total</span>
      </label>
      <form>
        <label htmlFor="selectAll">Todos:</label>
        <input
          type="checkbox"
          id="selectAll"
          name="selectAll"
          onChange={selectAllCandidates}
          checked={selectedCandidates.length === candidates.length}
        />
        <br />
        {candidates.map((candidate) => {
          return (
            <div key={candidate.name}>
              <label htmlFor={candidate.name}>{candidate.name}:</label>
              <input
                type="checkbox"
                id={candidate.name}
                name="candidate"
                value={candidate.name}
                onChange={() => handleCandidateSelection(candidate.name)}
                checked={selectedCandidates.includes(candidate.name)}
              />
              <br />
            </div>
          );
        })}
      </form>
    </aside>
  );
}

export default Filter;
