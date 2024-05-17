import { RenderBetLabel } from "@atoms/bet-label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@atoms/table";
import { getRelativeTime } from "@root/utils/misc";
import { cn } from "@utils/cn";
import { Txns } from "@utils/use-txns";
import { Slash, Star } from "lucide-react";

export interface HistoryTableProps {
  data: Txns;
}

const HistoryTable = ({ data }: HistoryTableProps) => {
  const txns = Object.entries(data);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Bet</TableHead>
          <TableHead>Win</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {txns.map(([txnHash, { bet, win, createdAt }]) => (
          <TableRow key={txnHash}>
            <TableCell>
              <RenderBetLabel bet={bet} />
            </TableCell>
            <TableCell>
              {win ? (
                <span
                  className={cn([
                    "font-medium text-yellow-500 flex items-center gap-2",
                  ])}
                >
                  <Star className={cn(["text-yellow-500"])} size={16} />
                  Yes, you won! 🔥
                </span>
              ) : (
                "No, sorry."
              )}
            </TableCell>
            <TableCell>{getRelativeTime(createdAt)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

interface HistoryTableHeaderProps {
  children: React.ReactNode;
  accuracy: string;
  blackSharks: string;
  redCobras: string;
}

const HistoryTableHeader = ({
  children,
  accuracy,
  blackSharks,
  redCobras,
}: HistoryTableHeaderProps) => {
  return (
    <div
      className={cn([
        "flex justify-between flex-col",
        "lg:flex-row lg:items-end",
      ])}
    >
      <div>{children}</div>
      <div className={cn(["block", "lg:text-right"])}>
        <span className={cn(["block text-sm font-medium"])}>
          {accuracy}% Accuracy
        </span>
        <span className={cn(["flex items-center text-sm mt-1"])}>
          {blackSharks}% Black Sharks{" "}
          <Slash className={cn(["mx-1"])} size={16} /> {redCobras}% Red Cobras
        </span>
      </div>
    </div>
  );
};

export { HistoryTable, HistoryTableHeader };
