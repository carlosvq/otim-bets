import { BetOption } from "@utils/bet";
import { cn } from "@utils/cn";
import { Circle, Triangle } from "lucide-react";

const BlackSharkLabel = () => {
  return (
    <span
      className={cn([
        "font-medium text-primary-foreground flex items-center gap-2",
      ])}
    >
      <Triangle className={cn(["text-primary-foreground"])} size={16} /> Black
      Sharks
    </span>
  );
};

const RedCobraLabel = () => {
  return (
    <span className={cn(["font-medium text-red-600 flex items-center gap-2"])}>
      <Circle color="#dc2626" size={16} />
      Red Cobras
    </span>
  );
};

const RenderBetLabel = ({ bet }: { bet: BetOption }) => {
  switch (bet) {
    case BetOption.BlackShark:
      return <BlackSharkLabel />;
    case BetOption.RedCobra:
      return <RedCobraLabel />;
    default:
      return null;
  }
};

export { RenderBetLabel, BlackSharkLabel, RedCobraLabel };
