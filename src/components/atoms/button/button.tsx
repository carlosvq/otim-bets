import type { BaseComponentProps } from "@common/types/component";
import type { VariantProps } from "cva";
import type { ButtonHTMLAttributes } from "react";

import { Slot } from "@radix-ui/react-slot";
import { cn } from "@utils/cn";

import { buttonStyles } from "./button.styles";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    BaseComponentProps,
    VariantProps<typeof buttonStyles> {
  asChild?: boolean;
}

const Button = ({
  "data-testid": testId = "default.button",
  className,
  intent,
  size,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn([buttonStyles({ intent, size }), className])}
      data-testid={testId}
      {...props}
    />
  );
};

export { Button };
