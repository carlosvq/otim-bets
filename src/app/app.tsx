import { RenderBetLabel } from "@atoms/bet-label";
import { marginTopGapClassName } from "@atoms/gap-wrapper";
import { Description, H1, H3 } from "@atoms/typography";
import { BlackShark, RedCobra } from "@molecules/bet-card";
import { BetsContainer } from "@molecules/bets-container";
import { ConnectButton } from "@molecules/connect-button";
import { Navbar } from "@molecules/navbar";
import { RollButton } from "@molecules/roll-button";
import { HistoryTable, HistoryTableHeader } from "@organisms/history-table";
import { MainLayout } from "@templates/main";
import { BetOption, useBet } from "@utils/bet";
import { cn } from "@utils/cn";
import { getErrorMessage, useError } from "@utils/error";
import {
  calculateAccuracy,
  calculateBetAccuracy,
  checkChainSupport,
} from "@utils/misc";
import { useRoll } from "@utils/use-roll";
import { useTxns } from "@utils/use-txns";
import { Dices } from "lucide-react";
import { useEffect } from "react";
import { useAccount, useDisconnect } from "wagmi";

const App = () => {
  const { isConnected, chainId } = useAccount();
  const { selectedBet, setSelectedBet } = useBet();
  const { ErrorOutlet, renderError } = useError();
  const { roll, canRoll, timer, error, isPending, lastRoll } = useRoll();
  const { disconnect } = useDisconnect();

  const { txns, resetTxns } = useTxns();

  useEffect(() => {
    if (error !== null) {
      renderError({ message: getErrorMessage(error) });
    }
  }, [error]);

  const handleRoll = () => {
    roll().catch((error) => {
      renderError({ message: getErrorMessage(error) });
    });
  };

  const handleDisconnect = () => {
    disconnect();
    resetTxns();
  };

  const isChainSupported = chainId && checkChainSupport(chainId);

  const accuracy = calculateAccuracy(txns);
  const blackSharksAccuracy = calculateBetAccuracy(txns, BetOption.BlackShark);
  const redCobrasAccuracy = calculateBetAccuracy(txns, BetOption.RedCobra);

  const isTxnsRecordEmpty = Object.keys(txns).length === 0;

  return (
    <MainLayout>
      <div className={cn(["container mx-auto max-w-screen-lg"])}>
        <Navbar>
          <ConnectButton onDisconnect={handleDisconnect} />
        </Navbar>
      </div>

      <div
        className={cn([
          marginTopGapClassName,
          "container max-w-screen-lg",
          "lg:mx-auto",
        ])}
      >
        <div className={cn(["mt-8 mx-auto max-w-lg", "lg:mt-12"])}>
          <H1
            className={cn([
              "block text-center text-4xl",
              "lg:text-5xl lg:mx-auto",
            ])}
          >
            Let&apos;s place your bet!
          </H1>
          <Description className={cn(["text-center mt-4 block"])}>
            Join the excitement and choose your side:{" "}
            <span className={cn(["font-medium"])}>Red Cobras</span> or{" "}
            <span className={cn(["font-medium"])}>Black Sharks.</span> Bet on
            your favorite team, enjoy top-notch odds, and secure transactions.
            Start winning today!
          </Description>
        </div>

        <div className={cn(["mt-8", "lg:mt-12"])}>
          <BetsContainer>
            <BlackShark
              disabled={!isConnected}
              isSelected={selectedBet === BetOption.BlackShark}
              onSelect={() => setSelectedBet(BetOption.BlackShark)}
            />
            <RedCobra
              disabled={!isConnected}
              isSelected={selectedBet === BetOption.RedCobra}
              onSelect={() => setSelectedBet(BetOption.RedCobra)}
            />
          </BetsContainer>
        </div>

        <div className={cn(["mt-8 flex flex-col justify-center", "lg:mt-12"])}>
          <ErrorOutlet />

          <div className={cn(["mt-4 flex justify-center", "lg:mt-6"])}>
            {isConnected && isChainSupported ? (
              <RollButton
                disabled={!canRoll}
                isBetSelected={selectedBet !== BetOption.None}
                isPending={isPending}
                onRoll={handleRoll}
              >
                {canRoll ? (
                  <>
                    <Dices className={cn(["text-primary mr-2"])} size={24} />
                    Roll
                  </>
                ) : (
                  `Your next roll is in ${timer}s`
                )}
              </RollButton>
            ) : (
              <ConnectButton />
            )}
          </div>
        </div>

        {lastRoll !== BetOption.None ? (
          <div className={cn(["mt-12 flex justify-center", "lg:mt-6"])}>
            <div className={cn(["text-sm mt-3 flex items-center"])}>
              <span className={cn(["mr-4"])}>Last roll result:</span>{" "}
              <RenderBetLabel bet={lastRoll} />
            </div>
          </div>
        ) : null}

        {!isTxnsRecordEmpty ? (
          <div
            className={cn(["mt-16 flex flex-col justify-center", "lg:mt-24"])}
          >
            <HistoryTableHeader
              accuracy={accuracy}
              blackSharks={blackSharksAccuracy}
              redCobras={redCobrasAccuracy}
            >
              <H3>Bet History</H3>
            </HistoryTableHeader>
            <div className={cn(["mt-4"])}>
              <HistoryTable data={txns} />
            </div>
          </div>
        ) : null}
      </div>
    </MainLayout>
  );
};

export { App };
