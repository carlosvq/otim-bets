import { Button } from "@atoms/button";
import { BaseComponentProps } from "@common/types/component";
import { cn } from "@utils/cn";
import { HTMLAttributes, ReactNode } from "react";

import { betCardStyles } from "./bet-card.styles";

interface BetCardContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  children: ReactNode;
}

const BetCardContainer = ({ children, className }: BetCardContainerProps) => {
  return <div className={cn([betCardStyles(), className])}>{children}</div>;
};

/** Bet Cards Options */

interface BetCardProps {
  disabled?: boolean;
  isSelected: boolean;
  onSelect: () => void;
}

const BlackShark = ({ disabled, isSelected, onSelect }: BetCardProps) => {
  return (
    <BetCardContainer className={cn(["bg-[url('/black-bg.svg')] bg-bottom"])}>
      <img
        className={cn([
          "absolute max-h-44 bottom-0 left-4 opacity-50 -z-10 transition-all",
          "dark:opacity-10",
          isSelected ? "opacity-80 dark:opacity-80" : "",
        ])}
        src="/shark.svg"
      />
      <Button
        className={cn(["dark"])}
        disabled={isSelected || disabled}
        onClick={onSelect}
      >
        Black Sharks
      </Button>
    </BetCardContainer>
  );
};

const RedCobra = ({ disabled, isSelected, onSelect }: BetCardProps) => {
  return (
    <BetCardContainer className={cn(["bg-[url('/red-bg.svg')] bg-bottom"])}>
      <img
        className={cn([
          "absolute max-h-48 bottom-0 right-4 opacity-50 -z-10 transition-all",
          "dark:opacity-10",
          isSelected ? "opacity-80 dark:opacity-80" : "",
        ])}
        src="/cobra.svg"
      />
      <Button
        className={cn(["dark"])}
        disabled={isSelected || disabled}
        onClick={onSelect}
      >
        Red Cobras
      </Button>
    </BetCardContainer>
  );
};

export { BlackShark, RedCobra };
