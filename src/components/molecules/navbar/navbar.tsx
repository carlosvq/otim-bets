import type { BaseComponentProps } from "@common/types/component";
import type { HTMLAttributes, ReactNode } from "react";

import { Logo } from "@atoms/logo";
import { cn } from "@utils/cn";

import { navbarStyles } from "./navbar.styles";

export interface NavbarProps
  extends HTMLAttributes<HTMLDivElement>,
    BaseComponentProps {
  children: ReactNode;
}

const Navbar = ({
  "data-testid": testId = "default.navbar",
  className,
  children,
  ...props
}: NavbarProps) => {
  return (
    <div
      className={cn([navbarStyles({ className })])}
      data-testid={testId}
      {...props}
    >
      <div className={cn(["font-semibold"])}>
        <Logo className={cn(["max-h-10 w-24"])} />
      </div>
      {children}
    </div>
  );
};

export { Navbar };
