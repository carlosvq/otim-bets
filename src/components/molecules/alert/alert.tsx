import type { BaseComponentProps } from "@common/types/component";
import type { VariantProps } from "cva";
import type { ReactNode } from "react";

import { cn } from "@utils/cn";
import { X } from "lucide-react";

import { alertStyles, childrenStyles, messageStyles } from "./alert.styles";

export interface AlertProps
  extends VariantProps<typeof alertStyles>,
    BaseComponentProps {
  className?: string;
  children?: ReactNode;
  message?: string | ReactNode;
  onRequestClose?: () => void;
}
const Alert = ({
  "data-testid": testId = "default.alert",
  className,
  children,
  message,
  intent,
  onRequestClose,
}: AlertProps) => {
  return (
    <div
      className={cn([alertStyles({ intent }), className])}
      data-testid={testId}
    >
      <div className={"w-full"}>
        <span className={cn([messageStyles({ intent }), "block"])}>
          {message}
        </span>

        {children ? (
          <div className={cn([childrenStyles()])}>{children}</div>
        ) : null}
      </div>

      {onRequestClose ? (
        <X
          className={cn(["cursor-pointer text-secondary-foreground"])}
          size={20}
          onClick={onRequestClose}
        />
      ) : null}
    </div>
  );
};

export { Alert };
