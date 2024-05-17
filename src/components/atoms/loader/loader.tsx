import type { BaseComponentProps } from "@common/types/component";
import type { VariantProps } from "cva";
import type { HTMLAttributes } from "react";

import { cn } from "@utils/cn";

import { progressBarStyles, progressStyles } from "./loader.styles";

interface LoaderProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps,
    VariantProps<typeof progressBarStyles> {}

const Loader = ({
  "data-testid": testId = "default.loader",
  className,
  intent,
}: LoaderProps) => {
  return (
    <div
      className={cn([progressBarStyles({ intent }), className])}
      data-testid={testId}
    >
      <div className={cn([progressStyles({ intent })])} />
    </div>
  );
};

export { Loader };
export type { LoaderProps };
