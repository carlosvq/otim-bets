import abi from "@common/abi.json";
import { usePublicClient } from "wagmi";

import { BetOption } from "./bet";
import { getArgsFromEvent } from "./misc";
import { useLocalStorage } from "./storage";

export type TxnArg = {
  win: boolean;
  bet: Exclude<BetOption, null>;
  createdAt: Date;
};
export type Txns = Record<`0x${string}`, TxnArg>;

const useTxns = () => {
  const publicClient = usePublicClient();
  const [txns, setTxns] = useLocalStorage<Txns>("txns", {});

  if (!publicClient) {
    throw new Error("Public client is not available.");
  }

  const reset = () => {
    setTxns({});
  };

  const unwatch = publicClient.watchContractEvent({
    address: import.meta.env.VITE_CONTRACT_ADDRESS,
    abi,
    onLogs: async (logs) => {
      const logsArgs: Txns = {};

      logs.forEach((log) => {
        const args = getArgsFromEvent(log);
        if (args && log.transactionHash) {
          logsArgs[log.transactionHash] = { ...args, createdAt: new Date() };
        }
      });

      setTxns({ ...logsArgs, ...txns });
    },
  });

  return { unwatch, txns, setTxns, resetTxns: reset };
};

export { useTxns };
