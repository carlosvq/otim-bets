import type { BaseComponentProps } from "@common/types/component";
import type { ComponentPropsWithoutRef } from "react";

import { motion } from "framer-motion";
import { forwardRef } from "react";

export interface MotionContainerProps
  extends ComponentPropsWithoutRef<typeof motion.div>,
    BaseComponentProps {}

const MotionContainer = forwardRef<HTMLDivElement, MotionContainerProps>(
  ({ "data-testid": testId = "default.motion-container", ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        animate={{ opacity: 1 }}
        data-testid={testId}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        {...props}
      />
    );
  },
);

MotionContainer.displayName = MotionContainer.name;

export { MotionContainer };
