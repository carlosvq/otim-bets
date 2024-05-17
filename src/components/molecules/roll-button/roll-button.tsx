import { ButtonWithLoader } from "@atoms/button";
import { Description } from "@atoms/typography";
import { cn } from "@utils/cn";

interface RollButtonProps {
  children: React.ReactNode;
  disabled: boolean;
  isBetSelected: boolean;
  isPending: boolean;
  onRoll: () => void;
}

const RollButton = ({
  children,
  disabled,
  isBetSelected,
  isPending,
  onRoll,
}: RollButtonProps) => {
  return (
    <div className={cn(["flex flex-col justify-center items-center"])}>
      <ButtonWithLoader
        className={cn(["min-w-64"])}
        disabled={!isBetSelected || isPending || disabled}
        isLoading={isPending}
        onClick={onRoll}
      >
        {children}
      </ButtonWithLoader>

      <div className={cn(["min-h-6"])}>
        {!isBetSelected ? (
          <Description className={cn(["text-xs"])}>
            Please choose a bet before rolling...
          </Description>
        ) : null}
      </div>
    </div>
  );
};

export { RollButton };
