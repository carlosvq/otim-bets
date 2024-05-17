import { BaseComponentProps } from "@common/types/component";
import { cn } from "@utils/cn";
import { HTMLAttributes, ReactNode } from "react";

export interface BetsContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  children: ReactNode;
}

const BetsContainer = ({ children }: BetsContainerProps) => {
  return (
    <div className={cn(["grid gap-4", "lg:gap-6 lg:grid-cols-2"])}>
      {children}
    </div>
  );
};

export { BetsContainer };
