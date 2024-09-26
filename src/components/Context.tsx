import { createContext, ReactNode, useContext, useState } from "react";
import { CandidateType } from "../interfaces/CandidateType";

const INITIAL_STATE: CandidateType[] = [
  { id: 1, name: "Juan", votes: 0, percentage: 0 },
  { id: 2, name: "Jaqueline", votes: 0, percentage: 0 },
  { id: 3, name: "Heberth", votes: 0, percentage: 0 },
  { id: 4, name: "Victor", votes: 0, percentage: 0 },
];

interface CandidatesContextType {
  candidates: CandidateType[];
  handleVote: (id: number) => void;
  totalVotes: number;
}

const CandidatesContext = createContext<CandidatesContextType | undefined>(
  undefined
);

export const CandidatesProvider = ({ children }: { children: ReactNode }) => {
  const [candidates, setCandidates] = useState(INITIAL_STATE);
  const [totalVotes, setTotalVotes] = useState(0);

  function handleVote(id: number): void {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
    setTotalVotes(totalVotes + 1);
    console.log(totalVotes);
  }

  const store = {
    candidates,
    handleVote,
    totalVotes,
  };

  return (
    <CandidatesContext.Provider value={store}>
      {children}
    </CandidatesContext.Provider>
  );
};

export const useCandidates = () => {
  const context = useContext(CandidatesContext);
  if (!context) {
    throw new Error("useCandidates must be used within a CandidatesProvider");
  }
  return context;
};
