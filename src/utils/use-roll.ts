import abi from "@common/abi.json";
import { BetOption, useBet } from "@utils/bet";
import { readContractValueAsNumber } from "@utils/misc";
import { useState, useEffect } from "react";
import { useReadContract, useWriteContract } from "wagmi";

const ROLL_FUNCTION_NAME = "roll";
const LAST_ROLL_FUNCTION_NAME = "lastRoll";
const BUFFER_BETWEEN_ROLLS_FUNCTION_NAME = "BUFFER_BETWEEN_ROLLS";

export const useRoll = () => {
  const { selectedBet } = useBet();
  const { data, error, isPending, writeContractAsync } = useWriteContract();
  const [canRoll, setCanRoll] = useState<boolean>(true);
  const [timer, setTimer] = useState<number>(0);

  const { data: bufferBetweenRollsResult, error: bufferBetweenRollsError } =
    useReadContract({
      abi,
      address: import.meta.env.VITE_CONTRACT_ADDRESS,
      functionName: BUFFER_BETWEEN_ROLLS_FUNCTION_NAME,
    });

  const { data: lastRollResult, error: lastRollError } = useReadContract({
    abi,
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
    functionName: LAST_ROLL_FUNCTION_NAME,
    args: [import.meta.env.VITE_CONTRACT_ADDRESS],
  });

  const roll = async () => {
    if (!canRoll) {
      throw new Error("You must wait before rolling again.");
    }

    if (selectedBet === BetOption.None) {
      throw new Error("You must choose a bet before rolling.");
    }

    const bufferBetweenRolls = readContractValueAsNumber(
      bufferBetweenRollsResult,
    );

    await writeContractAsync({
      abi,
      address: import.meta.env.VITE_CONTRACT_ADDRESS,
      functionName: ROLL_FUNCTION_NAME,
      args: [selectedBet],
    });

    setCanRoll(false);
    setTimer(bufferBetweenRolls);
  };

  useEffect(() => {
    if (timer <= 0) {
      setCanRoll(true);
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  const lastRoll = (
    lastRollResult !== null && lastRollResult !== undefined
      ? readContractValueAsNumber(lastRollResult)
      : null
  ) as BetOption;

  return {
    roll,
    data,
    error: error || bufferBetweenRollsError || lastRollError,
    isPending,
    canRoll,
    timer,
    lastRoll,
  };
};
