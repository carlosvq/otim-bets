import { createContext, useContext, useState } from "react";

export const BetOption = {
  BlackShark: 0,
  RedCobra: 1,
  None: null,
} as const;
export type BetOption = (typeof BetOption)[keyof typeof BetOption];

interface ContextValue {
  selectedBet: BetOption | null;
  setSelectedBet: (bet: BetOption) => void;
}

const BetContext = createContext<ContextValue>({
  selectedBet: null,
  setSelectedBet: () => {},
});

interface BetProviderProps {
  children: React.ReactNode;
}

export const BetProvider = ({ children }: BetProviderProps) => {
  const [selectedBet, setSelectedBet] = useState<BetOption | null>(null);

  return (
    <BetContext.Provider value={{ selectedBet, setSelectedBet }}>
      {children}
    </BetContext.Provider>
  );
};

export const useBet = () => {
  const { selectedBet, setSelectedBet } = useContext(BetContext);
  return { selectedBet, setSelectedBet };
};
