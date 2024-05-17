import { AuthenticationStatus } from "@common/types/account";
import { holesky } from "wagmi/chains";

import { BetOption } from "./bet";
import { defaultErrorMessage } from "./error";
import { Txns } from "./use-txns";

export const isReady = (
  mounted: boolean,
  authenticationStatus?: AuthenticationStatus,
) => {
  return mounted && authenticationStatus !== AuthenticationStatus.Loading;
};

const supportedChainIds: Array<number> = [holesky.id];

export const checkChainSupport = (chainId: number) => {
  return supportedChainIds.includes(chainId);
};

export const getArgsFromEvent = (event: unknown) => {
  if (
    typeof event === "object" &&
    event !== null &&
    "args" in event &&
    typeof event.args === "object" &&
    event.args !== null &&
    "win" in event.args &&
    typeof event.args.win === "boolean" &&
    "bet" in event.args
  ) {
    return {
      win: event.args.win as boolean,
      bet: event.args.bet as Exclude<BetOption, null>,
    };
  }
};

export const readContractValueAsNumber = (contractValue: unknown) => {
  if (contractValue === undefined || contractValue === null) {
    throw new Error(defaultErrorMessage);
  }

  const numericValue = Number(BigInt(contractValue.toString()));
  if (Number.isNaN(numericValue)) {
    throw new Error(defaultErrorMessage);
  }

  return numericValue;
};

export const calculateAccuracy = (txns: Txns) => {
  const total = Object.keys(txns).length;
  const wins = Object.values(txns).filter((txn) => txn.win).length;

  return Number(total > 0 ? (wins / total) * 100 : 0).toFixed(0);
};

export const calculateBetAccuracy = (txns: Txns, bet: BetOption) => {
  const total = Object.values(txns).filter((txn) => txn.bet === bet).length;
  const wins = Object.values(txns).filter(
    (txn) => txn.bet === bet && txn.win,
  ).length;

  return Number(total > 0 ? (wins / total) * 100 : 0).toFixed(0);
};

export const getRelativeTime = (dateArg: Date): string => {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  let date = dateArg;
  if (typeof dateArg === "string") {
    date = new Date(dateArg);
  }

  const now = new Date();
  const diffInSeconds = (now.getTime() - date.getTime()) / 1000;

  if (Math.abs(diffInSeconds) < 60) {
    return "now";
  }

  const diffInMinutes = diffInSeconds / 60;
  if (Math.abs(diffInMinutes) < 60) {
    return rtf.format(-Math.round(diffInMinutes), "minute");
  }

  const diffInHours = diffInMinutes / 60;
  if (Math.abs(diffInHours) < 24) {
    return rtf.format(-Math.round(diffInHours), "hour");
  }

  const diffInDays = diffInHours / 24;
  if (Math.abs(diffInDays) < 30) {
    return rtf.format(-Math.round(diffInDays), "day");
  }

  const diffInMonths = diffInDays / 30;
  if (Math.abs(diffInMonths) < 12) {
    return rtf.format(-Math.round(diffInMonths), "month");
  }

  const diffInYears = diffInMonths / 12;
  return rtf.format(-Math.round(diffInYears), "year");
};
