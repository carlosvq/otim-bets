import type { BaseComponentProps } from "@common/types/component";
import type { HTMLAttributes } from "react";

import { cn } from "@utils/cn";

import { gapWrapperStyles } from "./gap-wrapper.styles";

export interface GapWrapperProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {}

const GapWrapper = ({
  "data-testid": testId = "default.gap-wrapper",
  className,
  ...props
}: GapWrapperProps) => {
  return (
    <div
      className={cn([gapWrapperStyles({ className })])}
      data-testid={testId}
      {...props}
    />
  );
};

export { GapWrapper };
