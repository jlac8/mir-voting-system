import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
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
  isPercentage: boolean;
  handleFilter: () => void;
  selectedCandidates: string[];
  handleCandidateSelection: (name: string) => void;
  selectAllCandidates: () => void;
}

const CandidatesContext = createContext<CandidatesContextType | undefined>(
  undefined
);

export const CandidatesProvider = ({ children }: { children: ReactNode }) => {
  const [candidates, setCandidates] = useState(INITIAL_STATE);
  const [totalVotes, setTotalVotes] = useState(0);
  const [isPercentage, setIsPercentage] = useState(true);
  const [selectedCandidates, setSelectedCandidates] = useState<string[]>([]);

  useEffect(() => {
    setSelectedCandidates(candidates.map((candidate) => candidate.name));
  }, [candidates]);

  function handleVote(id: number): void {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) =>
        candidate.id === id
          ? { ...candidate, votes: candidate.votes + 1 }
          : candidate
      )
    );
    setTotalVotes(totalVotes + 1);
  }

  function handleFilter(): void {
    setIsPercentage(!isPercentage);
  }

  function handleCandidateSelection(name: string): void {
    setSelectedCandidates((prevSelected) =>
      prevSelected.includes(name)
        ? prevSelected.filter((candidate) => candidate !== name)
        : [...prevSelected, name]
    );
  }

  function selectAllCandidates(): void {
    if (selectedCandidates.length === candidates.length) {
      setSelectedCandidates([]);
    } else {
      setSelectedCandidates(candidates.map((candidate) => candidate.name));
    }
  }

  const store = {
    candidates,
    handleVote,
    totalVotes,
    isPercentage,
    handleFilter,
    selectedCandidates,
    handleCandidateSelection,
    selectAllCandidates,
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
